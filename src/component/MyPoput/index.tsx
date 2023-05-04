import { Popover } from 'antd';
import { MyInput } from '../MyInput';
import { CaretDownOutlined } from '@ant-design/icons';
import React from 'react';

interface IMyPoput {
	arrayInfo: string[],
	name: string
}

export const MyPoput = ({ arrayInfo, name }: IMyPoput): JSX.Element => {
	const [buttonRadio, setButtonRadio] = React.useState('');

	const content = (
		<div className='poput'>
			{
				arrayInfo.map((item: string, index) => <button key={index} onClick={() => setButtonRadio(item)}>{item}</button>)
			}
		</div>
	);

	return (
		<Popover content={content} title="Група" trigger="hover">
			<div><MyInput type="text" name={name} poputValue={buttonRadio} /><div className='input-hover'><CaretDownOutlined /></div></div>
		</Popover>
	);
} 