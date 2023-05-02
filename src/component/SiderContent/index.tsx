import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import { HomeFilled, TableOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';

import logo from '../../assest/image/logo.png'

const { Sider } = Layout

interface ISidebarContent {
	burger: boolean
}

export const SidebarContent = ({ burger }: ISidebarContent): JSX.Element => {
	return (
		<Sider className={`sider ${burger ? 'active' : ''}`} >
			<div className="sider__body" style={{ padding: '10px 10px 15px 10px' }}>
				<div className="sider__top">
					<Link className='logo' to='/'><img src={logo} alt="Logo" width={42} height={42} />rozzoro</Link>
					<div className="sider__list">
						<Link to='/'>
							<Button block className='sider__button'>
								<HomeFilled style={{ fontSize: '0.7rem' }} />
								<span>Primary</span>
							</Button>
						</Link>
						<Link to='/table'>
							<Button block className='sider__button'>
								<TableOutlined style={{ fontSize: '0.7rem' }} />
								<span>Table</span>
							</Button>
						</Link>
						<Link to="/forms">
							<Button block className='sider__button'>
								<FormOutlined style={{ fontSize: '0.7rem' }} />
								<span>Forms</span>
							</Button>
						</Link>
					</div>
				</div>
				<div className="sider__exit">
					<Button block className='sider__button'>
						<LogoutOutlined style={{ fontSize: '0.7rem' }} />
						<span>Exit</span>
					</Button>
				</div>
			</div>
		</Sider>
	)
}