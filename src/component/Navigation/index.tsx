import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/action/data';

interface INavigation {
	totalCount: number,
	isLoaded: boolean,
	setTotalCount: Function,
}

export const Navigation = ({ totalCount, setTotalCount, isLoaded }: INavigation): JSX.Element => {
	const dispatch: Function = useDispatch();

	const { next_page, prev_page }: any = useSelector((data: any) => {
		return {
			next_page: data.data.next_page,
			prev_page: data.data.prev_page,
		}
	});

	return (
		<div className="content__nav">
			<Button
				className={`content__arrow ${totalCount <= 1 ? 'close' : ''}`}
				onClick={() => {
					window.scroll(0, 0)
					totalCount > 1 ? setTotalCount(totalCount - 1) : setTotalCount(totalCount)
					dispatch(fetchData(prev_page))
				}}>
				<LeftOutlined />
			</Button>
			<Button className='content__total' type="primary" shape="circle" >{isLoaded ? '...' : totalCount}</Button>
			<Button
				className='content__arrow'
				onClick={() => {
					window.scroll(0, 0)
					setTotalCount(totalCount + 1);
					dispatch(fetchData(next_page))
				}}>
				<RightOutlined />
			</Button>
		</div>
	);
}