import React from 'react';
import { Layout, Button } from 'antd';
import { TableContent } from './component/TableContent/TableContent';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/action/data';

import logo from './assest/image/logo.png'

const { Header, Footer, Sider, Content } = Layout;

function App() {

  const dispatch: Function = useDispatch();

  const { tenders } = useSelector((data: any) => {
    return {
      tenders: data.data.items,
    }
  });

  const [isLoaded, setIsLoaded] = React.useState(true);

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  React.useEffect(() => {
    if (tenders.length > 0) {
      setIsLoaded(false)
    }
  }, [tenders])

  return (
    <Layout className='wrapper'>
      <Sider className='sider' style={{ padding: 10 }}>
        <div className="sider__body">
          <Link className='logo' to='/'><img src={logo} alt="Logo" width={42} height={42} />rozzoro</Link>
          <div className="sider__list">
            <Button block className='slider__button'>
              Primary
            </Button>
            <Button block className='slider__button'>
              <span>Table</span>
            </Button>
          </div>
        </div>
      </Sider>
      <Layout style={{ fontFamily: 'inherit' }}>
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
        </Header>
        <Content className='content'>
          <TableContent tenders={tenders} isLoaded={isLoaded} />
        </Content>
        <Footer className='footer'>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
