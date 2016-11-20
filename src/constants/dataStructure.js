// NOTE: 此檔案定義數據資料 計算方式
// XXX: 目前暫定不當作儲存在 state 的結構 而是firebase抓下來的資料直接放在 state

export class BillingReminder {
	constructor(data) {
		this.companyName = '';
		this.dieselTotal = new DieselTotal();
		this.lubOilTotal = new LubOilTotal();
		this.totalPrice = 0;
		this.taxExcluded = 0;
		this.tax = 0;
		this.entities = [];
	}

}

export class DieselTotal {
	constructor() {
		this.unitPrice = 0.0;
		this.count = 0;
	}
}

export class LubOilTotal {
	constructor() {
		this.unitPrice = 0.0;
		this.count = 0;
	}
}

export const DIESEL = 'DIESEL';
export const LUB_OIL = 'LUB_OIL';
export class BillingEntity {
	constructor() {
		this.type = '';
		this.date = '';
		this.product = '';
		this.count = 0;
		this.unit = '';
		this.unitPrice = 0;
		this.price = 0;
		this.remark = ''

	}
}
