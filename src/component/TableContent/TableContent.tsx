import React from "react";
import { Table, } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { FilterValue } from 'antd/es/table/interface';

export interface DataType {
	procuringEntity: { name: string };
	title: string,
	description: string,
	owner: string
}


interface interfaceTableContent {
	tenders: any,
	isLoaded: boolean
}

interface TableParams {
	pagination?: TablePaginationConfig;
	filters?: Record<string, FilterValue>;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: ['procuringEntity', 'name'],
		key: 'name'
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: 'Description',
		dataIndex: 'description',
		key: 'description',
	},
	{
		title: 'Price',
		dataIndex: ['minimalStep', 'amount'],
		key: 'price',
		render: (text, record) => (
			<span>{text} ₴</span>
		),
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		filters: [
			{ text: 'Unsuccessful', value: 'unsuccessful' },
			{ text: 'Cancelled', value: 'cancelled' },
		],
	},
	{
		title: 'Owner',
		dataIndex: 'owner',
		key: 'owner',
		filters: [
			{ text: 'e-tender.biz', value: 'e-tender.biz' },
			{ text: 'prom.ua', value: 'cancelled' },
		],
		width: '11%'
	}
];

export const TableContent = ({ tenders, isLoaded }: interfaceTableContent): JSX.Element => {
	const [data, setData] = React.useState([]);
	const [tableParams, setTableParams] = React.useState<TableParams>({
		pagination: {
			current: 1,
			pageSize: 100,
		},
	});

	React.useEffect(() => {
		setData(tenders);
		console.log(data.length);
	}, [tenders])

	React.useEffect(() => {
		const filterData = tenders.filter((item: { status: string }) => {
			if (tableParams.filters) {
				return tableParams.filters.status === null ? item : tableParams.filters.status.includes(item.status)
			}
		})
		console.log(tableParams);
		setData(filterData);
	}, [tableParams])

	const handleTableChange = (pagination: TablePaginationConfig, filters: any) => {

		setTableParams({ pagination, filters });
		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([]);
		}
	};

	return (
		<Table
			columns={columns}
			dataSource={data.length === 0 ? tenders : data}
			loading={isLoaded}
			pagination={{ pageSize: 100 }}
			onChange={handleTableChange}
		/>
	);
}