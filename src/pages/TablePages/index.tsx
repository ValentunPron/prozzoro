import React from "react";
import type { InputRef } from 'antd';
import { Table, Button, Input, Space, } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnType, ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { FilterConfirmProps, FilterValue, } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { Navigation } from "../../component";

export interface DataType {
	procuringEntity: { name: string };
	minimalStep: { amount: number },
	status: string,
	title: string,
	description: string,
	owner: string
}


interface ITableContent {
	tenders: any,
	isLoaded: boolean,
}

interface ITableParams {
	pagination?: TablePaginationConfig;
	filters?: Record<string, FilterValue>;
}

type DataIndex = keyof DataType;

export const TablePages = ({ tenders, isLoaded }: ITableContent): JSX.Element => {
	const [data, setData] = React.useState([]);
	const [totalCount, setTotalCount] = React.useState(1);
	const [searchText, setSearchText] = React.useState('');
	const [searchedColumn, setSearchedColumn] = React.useState('');
	const searchInput = React.useRef<InputRef>(null);
	const [tableParams, setTableParams] = React.useState<ITableParams>({
		pagination: {
			current: 1,
			pageSize: 100,
		},
	});

	React.useEffect(() => {
		setData(tenders);
		console.log(data.length);
	}, [tenders]);

	const handleSearch = (selectedKeys: string[], confirm: (param?: FilterConfirmProps) => void, dataIndex: DataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters: () => void) => {
		clearFilters();
		setSearchText('');
	};

	const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
					style={{ marginBottom: 8, display: 'block' }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters)}
						size="small"
						style={{ width: 90 }}
					>
						Reset
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							confirm({ closeDropdown: false });
							setSearchText((selectedKeys as string[])[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Filter
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							close();
						}}
					>
						close
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered: boolean) => (
			<SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
		),
		onFilter: (value, record) =>
			record[dataIndex]
				.toString()
				.toLowerCase()
				.includes((value as string).toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (
				text
			),
	});

	React.useEffect(() => {
		const filterData = tenders.filter((item: { status: string, owner: string }) => {
			if (tableParams.filters) {
				const { status, owner } = tableParams.filters;

				if (status && status.length > 0 && !status.includes(item.status)) {
					return false;
				}
				if (owner && owner.length > 0 && !owner.includes(item.owner)) {
					return false;
				}
				return true;
			}
		})
		setData(filterData);
	}, [tableParams])

	const handleTableChange = (pagination: TablePaginationConfig, filters: any, sorter: any) => {
		setTableParams({ pagination, filters, ...sorter });
		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([]);
		}
	};
	const columns: ColumnsType<DataType> = [
		{
			title: 'Name',
			dataIndex: ['procuringEntity', 'name'],
			key: 'name',
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			...getColumnSearchProps('title'),
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			...getColumnSearchProps('description'),
		},
		{
			title: 'Price',
			dataIndex: ['minimalStep', 'amount'],
			key: 'price',
			sorter: (a, b) => a.minimalStep.amount - b.minimalStep.amount,
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
				{ text: 'prom.ua', value: 'prom.ua' },
				{ text: 'newtend.com', value: 'newtend.com' }
			],
			width: '9%'
		}
	];

	return (
		<>
			<Table
				columns={columns}
				dataSource={data.length === 0 ? tenders : data}
				loading={isLoaded}
				pagination={{ pageSize: 100 }}
				onChange={handleTableChange}
				bordered={true}
				size={'middle'}
			/>
			<Navigation totalCount={totalCount} setTotalCount={setTotalCount} isLoaded={isLoaded} />
		</>
	);
}