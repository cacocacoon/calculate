import React from 'react';

class PreviewReminder extends React.Component {

	render() {
		const {

		} = this.props;

		return (
			<div class="order" name="order">
						<h1 class="text-center">海有股份有限公司</h1>
						<h3 class="text-center">請款明細表</h3>
						<h4>客戶名稱：Costco 好事多有限公司</h4>
						<table class="table table-hover">
							<thead>
								<tr>
									<th>#</th>
									<th class="text-center">日期</th>
									<th class="text-center">品名</th>
									<th class="text-center">數量</th>
									<th class="text-center">單位</th>
									<th class="text-center">單價</th>
									<th class="text-center">金額</th>
									<th class="text-center">備註</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td class="text-center">5/28</td>
									<td class="text-center">超級柴油</td>
									<td class="text-right">1160</td>
									<td class="text-center">L</td>
									<td class="text-right">32.9</td>
									<td class="text-right">38164</td>
									<td class="text-center"></td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td class="text-center">5/29</td>
									<td class="text-center">超級柴油</td>
									<td class="text-right">1200</td>
									<td class="text-center">L</td>
									<td class="text-right">29.9</td>
									<td class="text-right">29910</td>
									<td class="text-center">內湖路</td>
								</tr>
								<tr>
									<td class="text-center" colspan="6">銷售總金額</td>
									<td class="text-right" colspan="2">74268</td>
								</tr>
								<tr>
									<td class="text-center" colspan="6">稅額</td>
									<td class="text-right" colspan="2">1234</td>
								</tr>
								<tr>
									<td class="text-center" colspan="6">總計</td>
									<td class="text-right" colspan="2">82341</td>
								</tr>
							</tbody>
						</table>
					</div>
		);
	}
}

export default PreviewReminder;
 
