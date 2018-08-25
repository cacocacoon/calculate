// NOTE: 此檔案定義數據資料 計算方式
// XXX: 目前暫定不當作儲存在 state 的結構 而是firebase抓下來的資料直接放在 state
import {ENTITY, INIT_REMINDER} from './CONST';

const DIESEL = ENTITY.getIn(['TYPE', 'DIESEL']);
const LUB_OIL = ENTITY.getIn(['TYPE', 'LUB_OIL']);

export class BillingReminder {
	constructor() {
		this.companyName = '';
		this.dieselTotal = null;
		this.lubOilTotal = null;
		this.entities = [];
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

	setCompanyName(companyName = '') {
		this.companyName = companyName.trim();
	}

	setEntities(entities = []) {
		this.entities = entities.map(e => BillingEntity.fromState(e));
		this.dieselTotal.entities = this.entities.filter(e => e.type === DIESEL);
		this.lubOilTotal.entities = this.entities.filter(e => e.type === LUB_OIL);
	}

	push(newBilling) {
		this.entities.push(newBilling);
		switch (newBilling.type) {
			case DIESEL:
				this.dieselTotal.entities.push(newBilling);
				break;
			case LUB_OIL:
				this.lubOilTotal.entities.push(newBilling);
				break;

		}
	}

	toState() {
		let state = INIT_REMINDER.toJS();
		state.companyName = this.companyName;

		state.entities = this.entities.map(e => e.toState());

		return state;
	}

	// NOTE: 只是先從state抓必要資料過來,需要計算全都不做
	static fromState(state) {
		let reminder = new BillingReminder();
		reminder.setCompanyName(state.companyName);
		reminder.dieselTotal = new OilTotal();
		reminder.lubOilTotal = new OilTotal();
		reminder.setEntities(state.entities);
		return reminder;
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

	get priceExcludeTax() {
		return this.count > 0 ? this.priceIncludeTax / 1.05 : 0;
	}

	get unitPriceExcludeTax() {
		return this.count > 0 ? this.priceExcludeTax / this.count : 0.0;
	}
}

export class BillingEntity {

	constructor() {
		this.type = '';
		this.date = '';
		this.productName = '';
		this.count = 0;
		this.unit = '';
		this.unitPrice = 0.0;
		this.remark = '';
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


	static fromState(entity) {
		let billingEntity = new BillingEntity();
		billingEntity.type = entity.type;
		billingEntity.date = entity.date;
		billingEntity.productName = entity.productName;
		billingEntity.count = entity.count;
		billingEntity.unit = entity.unit;
		billingEntity.unitPrice = entity.unitPrice;
		billingEntity.remark = entity.remark;

		return billingEntity;
	}
}
