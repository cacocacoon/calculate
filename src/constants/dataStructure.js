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
		this.totalPriceExcludedTax = 0;
		this.totalTax = 0;
		this.totalPrice = 0;
		this.entities = [];
	}

	setCompanyName(companyName = '') {
		this.companyName = companyName.trim();
	}

	setEntities(entities = []) {
		this.entities = entities.map(e => BillingEntity.fromState(e));
	}

	push(newBilling) {
		this.entities.push(newBilling);
	}

	calculate() {
		this.dieselTotal.calculate(this.entities);
		this.lubOilTotal.calculate(this.entities);

		this.totalPriceExcludedTax = Math.round(
			this.dieselTotal.priceExcludeTax +
			this.lubOilTotal.priceExcludeTax
		);

		this.totalTax =
			Math.round(this.dieselTotal.priceExcludeTax * 0.05) +
			Math.round(this.lubOilTotal.priceExcludeTax * 0.05);

		this.totalPrice = this.totalPriceExcludedTax + this.totalTax;

		return this;
	}

	toState() {
		let state = INIT_REMINDER.toJS();
		state.companyName = this.companyName;

		state.dieselTotal = this.dieselTotal.toState();
		state.lubOilTotal = this.lubOilTotal.toState();

		state.totalPriceExcludedTax = this.totalPriceExcludedTax;
		state.totalTax = this.totalTax;
		state.totalPrice = this.totalPrice;

		state.entities = this.entities.map(e => e.toState());

		return state;
	}

	// NOTE: 只是先從state抓必要資料過來,需要計算全都不做
	static fromState(state) {
		let reminder = new BillingReminder();
		reminder.setCompanyName(state.companyName);
		reminder.setEntities(state.entities);
		reminder.dieselTotal = new DieselTotal();
		reminder.lubOilTotal = new LubOilTotal();
		return reminder;
	}

}

export class DieselTotal {
	constructor() {
		this.count = 0;
		this.unitPriceExcludeTax = 0.0;
		this.priceIncludeTax = 0;
		this.priceExcludeTax = 0;
	}

	calculate(entities) {
		// 篩選出 DIESEL，然後計算加總結果存入到this.priceIncludeTax, this.count
		entities.filter(e => e.type === DIESEL).reduce((self, e) => {
			const {price, count} = e.calculate();
			self.priceIncludeTax += price;
			self.count += count;
			return self;
		}, this);

		// 假如有超級柴油, 才要計算
		if(this.count > 0) {
			this.priceExcludeTax = this.priceIncludeTax / 1.05;
			this.unitPriceExcludeTax = this.priceExcludeTax / this.count;
		}

		return this;
	}

	toState() {
		return {
			count: this.count,
			unitPriceExcludeTax: this.unitPriceExcludeTax,
			priceExcludeTax: this.priceExcludeTax,
			priceIncludeTax: this.priceIncludeTax,
		};
	}
}

export class LubOilTotal {
	constructor() {
		this.count = 0;
		this.unitPriceExcludeTax = 0.0;
		this.priceIncludeTax = 0;
		this.priceExcludeTax = 0;
	}

	calculate(entities) {
		// 篩選出 LUB_OIL，然後計算加總結果存入到this.priceIncludeTax, this.count
		entities.filter(e => e.type === LUB_OIL).reduce((self, e) => {
			const {price, count} = e.calculate();
			self.priceIncludeTax += price;
			self.count += count;
			return self;
		}, this);

		// 假如有潤滑油, 才要計算
		if(this.count > 0) {
			this.priceExcludeTax = this.priceIncludeTax / 1.05;
			this.unitPriceExcludeTax = this.priceExcludeTax / this.count;
		}

		return this;
	}

	toState() {
		return {
			count: this.count,
			unitPriceExcludeTax: this.unitPriceExcludeTax,
			priceExcludeTax: this.priceExcludeTax,
			priceIncludeTax: this.priceIncludeTax,
		};
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
		this.price = 0;
		this.remark = '';
	}

	toState() {
		return {
			type: this.type,
			date: this.date,
			productName: this.productName,
			count: this.count,
			unit: this.unit,
			unitPrice: this.unitPrice,
			price: this.price,
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

	calculate() {
		this.setPrice();
		return this;
	}

	setPrice() {
		// javascript 有精準度誤差, 四捨五入到第五位
		this.price = Math.round(this.count * this.unitPrice * 10000) / 10000;
	}

}
