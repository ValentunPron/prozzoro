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
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: 'Rulls',
		dataIndex: 'items[0].description)',
		key: 'Rulls'
	},
	{
		title: 'Description',
		dataIndex: 'description',
		key: 'description',
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
	return (
		<Table columns={columns} dataSource={tenders} loading={isLoaded} pagination={{ pageSize: 100 }} />
	);
}