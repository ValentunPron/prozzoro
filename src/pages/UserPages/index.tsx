import React from 'react';
import type { ColumnsType } from 'antd/es/table';

import { TableTop } from '../../component';
import Table from 'antd/es/table';
interface DataType {
	id: number
	fullName: string;
	group: string;
	organization: string;
	phone: string;
	email: string;
}

interface IUserPages {
	userData: any,
}

const columns: ColumnsType<DataType> = [
	{
		title: 'ПІБ',
		dataIndex: 'fullName',
		key: 'fullName',
	},
	{
		title: 'Група',
		dataIndex: 'group',
		key: 'group',
	},
	{
		title: 'Організація',
		dataIndex: 'organization',
		key: 'organization',
	},
	{
		title: 'Телефон',
		dataIndex: 'phone',
		key: 'phone',
	},
	{
		title: 'Електронна почта',
		dataIndex: 'email',
		key: 'email',
	},
];

export const UserPages = ({ userData }: IUserPages): JSX.Element => {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		setData(userData);
	}, [])

	return (
		<div className="talbe">
			<TableTop />
			<Table columns={columns} dataSource={data.length > 0 ? data : userData} />
		</div>
	);
}