import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/action/data';

import { SidebarContent, HeaderContent, Navigation } from './component';
import { FormsPages, MainPages, NotFound, TablePages } from './pages';

const { Footer, Content } = Layout;

function App() {

  const dispatch: Function = useDispatch();

  const { tenders, next_page, prev_page }: any = useSelector((data: any) => {
    return {
      tenders: data.data.items,
      next_page: data.data.next_page,
      prev_page: data.data.prev_page,
    }
  });

  const [isLoaded, setIsLoaded] = React.useState(true);
  const [burger, setBurger] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  React.useEffect(() => {
    setIsLoaded(true);
  }, [prev_page, next_page])

  React.useEffect(() => {
    if (tenders.length > 0) {
      setIsLoaded(false)
    }
  }, [tenders]);

  return (
    <Layout className='wrapper'>
      <SidebarContent burger={burger} />
      <Layout className='wrapper__body' style={{ fontFamily: 'inherit' }}>
        <HeaderContent burger={burger} setBurger={setBurger} />
        <Content className='content'>
          <Routes>
            <Route path='/' element={<MainPages />} />
            <Route path='/table' element={<TablePages tenders={tenders} isLoaded={isLoaded} />} />
            <Route path='/forms' element={<FormsPages />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer className='footer'>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
