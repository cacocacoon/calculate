// NOTE: 此檔案定義數據資料 計算方式
// XXX: 目前暫定不當作儲存在 state 的結構 而是firebase抓下來的資料直接放在 state
import {ENTITY, INIT_REMINDER} from './CONST';

const DIESEL = ENTITY.getIn(['TYPE', 'DIESEL']);
const LUB_OIL = ENTITY.getIn(['TYPE', 'LUB_OIL']);

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
