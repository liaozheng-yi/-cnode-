import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
import zhCN from 'antd/es/locale/zh_CN';


ReactDOM.render(
  <BrowserRouter>
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
    </ConfigProvider>
  </BrowserRouter>,

  document.getElementById('root')
);