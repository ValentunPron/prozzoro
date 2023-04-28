import React from 'react';
import { Layout, Space } from 'antd';
import styles from './Main.module.scss';

const { Header, Footer, Sider, Content } = Layout;

export const Main = (): JSX.Element => (
	<Layout>
		<Sider className={styles.sider}>Sider</Sider>
		<Layout>
			<Header className={styles.header}>Header</Header>
			<Content className={styles.content}>Content</Content>
			<Footer className={styles.footer}>Footer</Footer>
		</Layout>
	</Layout>
);
