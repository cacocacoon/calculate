// NOTE: 此檔案定義數據資料 計算方式
// XXX: 目前暫定不當作儲存在 state 的結構 而是firebase抓下來的資料直接放在 state
import {ENTITY, INIT_REMINDER} from './CONST';

const DIESEL = ENTITY.getIn(['TYPE', 'DIESEL']);
const LUB_OIL = ENTITY.getIn(['TYPE', 'LUB_OIL']);
const MAX_DIESEL_COUNT = 2000;

export class BillingReminder {
	constructor({companyName, entities}) {
		this.companyName;
		this.entities = [];
		this.dieselTotal = new OilTotal();
		this.lubOilTotal = new OilTotal();
		this.setCompanyName(companyName);
		this.setEntities(entities);
	}

	get totalPriceExcludedTax() {
		return Math.round(this.dieselTotal.priceExcludeTax + this.lubOilTotal.priceExcludeTax);
	}

	get totalTax() {
		return Math.round(this.dieselTotal.priceExcludeTax * 0.05) + Math.round(this.lubOilTotal.priceExcludeTax * 0.05);
	}

	get totalPrice() {
		return this.totalPriceExcludedTax + this.totalTax;
	}

	get count() {
		return this.dieselTotal.count + this.lubOilTotal.count;
	}

	setCompanyName(companyName = '') {
		this.companyName = companyName.trim();
	}

	setEntities(entities = []) {
		this.entities = entities.map(e => new BillingEntity(e));
		this.dieselTotal.entities = this.entities.filter(e => e.type === DIESEL);
		this.lubOilTotal.entities = this.entities.filter(e => e.type === LUB_OIL);
	}

	push(...newBillings) {
		this.entities.push(...newBillings);
		newBillings.forEach(newBilling => {
			switch (newBilling.type) {
				case DIESEL:
					this.dieselTotal.entities.push(newBilling);
					break;
				case LUB_OIL:
					this.lubOilTotal.entities.push(newBilling);
					break;
			}
		});
	}

	toState() {
		let state = INIT_REMINDER.toJS();
		state.companyName = this.companyName;
		state.entities = this.entities.map(e => e.toState());
		return state;
	}

	toInvoiceChunks(chunkId = 0) {
		const dieselCount = this.dieselTotal.count;
		//要另外開剩餘油數量
		const dieselRemainderCount = dieselCount % MAX_DIESEL_COUNT;
		// MAX_DIESEL_COUNT 發票要開幾次
		const times = parseInt(dieselCount / MAX_DIESEL_COUNT);
		const chunks = [];
		for (let i = 0; i < times; i++) {
			chunks.push(new BillingReminder({
				companyName: `${this.companyName} ${chunkId}`,
				entities: [{
					type: DIESEL,
					date: '',
					productName: '',
					count: MAX_DIESEL_COUNT,
					unit: 'L',
					unitPrice: this.dieselTotal.unitPriceIncludeTax,
					remark: ''
				}]
			}));
		}

		const mainDieselRemindersTotalPrice = chunks.reduce((totalPrice, reminder) => (
			totalPrice += reminder.totalPrice
		), 0);

		const dieselRemainderPrice = this.dieselTotal.priceIncludeTax - mainDieselRemindersTotalPrice;
		if (dieselRemainderPrice <= 0) {
			alert('看 console');
			console.warn(dieselRemainderPrice, this);
		}
		dieselRemainderCount > 0 && chunks.push(new BillingReminder({
			companyName: `${this.companyName} ${chunkId}`,
			entities: [{
				type: DIESEL,
				date: '',
				productName: '',
				count: dieselRemainderCount,
				unit: 'L',
				unitPrice: dieselRemainderPrice / dieselRemainderCount,
				remark: ''
			}]
		}));
		//如果有潤滑油就加到最後一張發票
		this.lubOilTotal.count > 0 && chunks[chunks.length - 1].push(...this.lubOilTotal.entities);

		return chunks;
	}

}

class OilTotal {
	constructor() {
		this.entities = [];
	}

	get count() {
		return this.entities.reduce((count, e) => (
			count += e.count
		), 0);
	}

	get priceIncludeTax() {
		return this.entities.reduce((priceIncludeTax, e) => (
			priceIncludeTax += e.price
		), 0);
	}
	
	get unitPriceIncludeTax() {
		return this.count > 0 ? this.priceIncludeTax / this.count : 0.0;
	}

	get priceExcludeTax() {
		return this.count > 0 ? this.priceIncludeTax / 1.05 : 0;
	}

	get unitPriceExcludeTax() {
		return this.count > 0 ? this.priceExcludeTax / this.count : 0.0;
	}
}

export class BillingEntity {

	constructor({type, date, productName, count, unit, unitPrice, remark}) {
		this.type = type;
		this.date = date;
		this.productName = productName;
		this.count = count;
		this.unit = unit;
		this.unitPrice = unitPrice;
		this.remark = remark;
	}

	get price() {
		return Math.round(this.count * this.unitPrice * 10000) / 10000;
	}

	toState() {
		return {
			type: this.type,
			date: this.date,
			productName: this.productName,
			count: this.count,
			unit: this.unit,
			unitPrice: this.unitPrice,
			remark: this.remark,
		}
	}
}
