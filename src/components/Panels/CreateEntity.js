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

class CreateEntity extends React.Component {

	render() {
		const {
			// type,
			// date,
			productName,
			// count,
			unit,
			// unitPrice,
			// remark,
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
			<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
				<Checkbox
					defaultChecked={true}
					onCheck={setType}
					style={{width: 'initial', flexBasis: '30px'}}
					checkedIcon={<InvertColors />}
					/>

				<DatePicker
					onChange={setDate}
					floatingLabelText="日期"
					floatingLabelFixed={true}
					locale="zh-TW"
					formatDate={formatDate}
					DateTimeFormat={dateTimFormat()}
					autoOk={true}
					style={{width: 'initial', flexBasis: '70px'}}
					textFieldStyle={{width: '100%'}}
					/>

				<SelectField
					floatingLabelText="品名"
					floatingLabelFixed={true}
					onChange={setProductName}
					value={productName.value}
					style={{width: 'initial', flexBasis: '120px'}}
					>
					<MenuItem value="超級柴油" primaryText="超級柴油" />
					<MenuItem value="潤滑油" primaryText="潤滑油" />
				</SelectField>

				<TextField
					onChange={setCount}
					floatingLabelText="數量"
					floatingLabelFixed={true}
					style={{width: 'initial', flexBasis: '70px'}}
					/>

				<SelectField
					floatingLabelText="單位"
					floatingLabelFixed={true}
					onChange={setUnit}
					value={unit.value}
					style={{width: 'initial', flexBasis: '70px'}}
					>
					<MenuItem value="L" primaryText="L" />
					<MenuItem value="桶" primaryText="桶" />
				</SelectField>

				<TextField
					onChange={setUnitPrice}
					floatingLabelText="單價"
					floatingLabelFixed={true}
					style={{width: 'initial', flexBasis: '70px'}}
					/>

				<TextField
					onChange={setRemark}
					floatingLabelText="備註"
					floatingLabelFixed={true}
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
