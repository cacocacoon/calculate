import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import {blue500} from 'material-ui/styles/colors';
import InvertColors from 'material-ui/svg-icons/action/invert-colors';
import {ENTITY} from '../../constants/CONST';
class CreateEntity extends React.Component {

	render() {
		const {
			//variable from state
			type,
			date,
			productName,
			count,
			unit,
			unitPrice,
			remark,
			//function
			setType,
			setDate,
			setProductName,
			setCount,
			setUnit,
			setUnitPrice,
			setRemark,
			dateTimFormat,
			formatDate,
			pushNewEntity,
		} = this.props;

		return (
			<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start', textAlign: 'initial'}}>
				<Checkbox
					defaultChecked={true}
					value={type.value === ENTITY.getIn(['TYPE', 'DIESEL']) ? true : false}
					onCheck={setType}
					style={{width: 'initial', alignSelf: 'center', flexBasis: '30px'}}
					checkedIcon={<InvertColors />}
					/>

				<DatePicker
					floatingLabelText="日期"
					floatingLabelFixed={true}
					value={date.value === '' ? null : new Date(date.value)}
					onChange={setDate}
					formatDate={formatDate}
					DateTimeFormat={dateTimFormat()}
					locale="zh-TW"
					autoOk={true}
					style={{width: 'initial', flexBasis: '70px'}}
					textFieldStyle={{width: '100%'}}
					errorText={date.errorText}
					/>

				<SelectField
					floatingLabelText="品名"
					floatingLabelFixed={true}
					value={productName.value}
					onChange={setProductName}
					errorText={productName.errorText}
					style={{width: 'initial', flexBasis: '120px'}}
					>
					<MenuItem value="超級柴油" primaryText="超級柴油" />
					<MenuItem value="潤滑油" primaryText="潤滑油" />
				</SelectField>

				<TextField
					floatingLabelText="數量"
					floatingLabelFixed={true}
					value={count.value}
					onChange={setCount}
					errorText={count.errorText}
					style={{width: 'initial', flexBasis: '70px'}}
					/>

				<SelectField
					floatingLabelText="單位"
					floatingLabelFixed={true}
					value={unit.value}
					onChange={setUnit}
					errorText={unit.errorText}
					style={{width: 'initial', flexBasis: '70px'}}
					>
					<MenuItem value="L" primaryText="L" />
					<MenuItem value="桶" primaryText="桶" />
				</SelectField>

				<TextField
					floatingLabelText="單價"
					floatingLabelFixed={true}
					value={unitPrice.value}
					onChange={setUnitPrice}
					errorText={unitPrice.errorText}
					style={{width: 'initial', flexBasis: '70px'}}
					/>

				<TextField
					floatingLabelText="備註"
					floatingLabelFixed={true}
					value={remark.value}
					onChange={setRemark}
					errorText={remark.errorText}
					style={{width: 'initial', flexBasis: '70px'}}
					/>

				<IconButton
					onTouchTap={pushNewEntity}
					style={{width: 'initial', height: '80px', flexBasis: '80px'}}
					iconStyle={{width: '30px', height: '30px'}}
					tooltip="新增"
					touch={true}
					>
					<ActionDone color={"#00bcd4"} />
				</IconButton>
			</div>

		);
	}
}

export default CreateEntity;
