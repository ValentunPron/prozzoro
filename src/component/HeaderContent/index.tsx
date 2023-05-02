import { Link } from "react-router-dom";
import { Layout } from 'antd';

interface IHeaderContent {
	burger: boolean,
	setBurger: Function,
}

const { Header } = Layout

export const HeaderContent = ({ burger, setBurger }: IHeaderContent): JSX.Element => {
	return (
		<Header className='header'>
			<Link to={'/'} className='header__info'>
				User Name
				<svg width="32" height="32" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<g fill="#54595d">
						<path d="M 10 11 C 4.08 11 2 14 2 16 L 2 19 L 18 19 L 18 16 C 18 14 15.92 11 10 11 Z" />
						<circle cx="10" cy="5.5" r="4.5" />
					</g>
				</svg>
			</Link>
			<button className={`burger  ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}><span></span></button>
		</Header>
	);
}