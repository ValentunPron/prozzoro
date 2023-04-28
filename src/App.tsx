import React from 'react';
import { Layout } from 'antd';
import { TableContent } from './component/TableContent/TableContent';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/action/data';

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
    if (tenders.length > 0) {
      setIsLoaded(false)
    }
  }, [tenders]);

  return (
    <div className='wrapper'>
      <Layout>
        <Sider className='sider'>
          <div className="sider__body">
            <Link className='logo' to='/'>LOGO</Link>
          </div>
        </Sider>
        <Layout>
          <Header className='header'>Header</Header>
          <Content className='content'>
            <TableContent tenders={tenders} isLoaded={isLoaded} />
          </Content>
          <Footer className='footer'>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
