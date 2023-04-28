import React from "react";
import { Table, } from 'antd';
import type { ColumnsType } from 'antd/es/table'

export interface DataType {
	procuringEntity: { name: string };
	title: string,
	description: string,
	owner: string
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
		title: 'Owner',
		dataIndex: 'owner',
		key: 'owner'
	}
];

interface interfaceTableContent {
	tenders: any,
	isLoaded: boolean
}

export const TableContent = ({ tenders, isLoaded }: interfaceTableContent): JSX.Element => {
	console.log(tenders)
	console.log(tenders[0].minimalStep.amount);
	return (
		<Table columns={columns} dataSource={tenders} loading={isLoaded} pagination={{ pageSize: 100 }} />
	);
}