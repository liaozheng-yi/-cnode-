import { Layout } from 'antd';
import React from 'react';
import Header from './component/header';
import IndexRouter from './router/index'
import Container from './component/container';
import Footer from './component/footer';
import './static/css/global/antd.less';
import './static/css/global/component.css';
import './static/css/global/topic.css';

function App() {
  return <Layout className="pageLayout"> 
    <Header/>
    <Layout.Content>
      <Container>
        <IndexRouter/>
      </Container>
    </Layout.Content>
    <Footer/>
  </Layout>
}

export default App;
