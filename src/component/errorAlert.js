import React from 'react'
import { Alert } from 'antd';
import { useHistory } from 'react-router-dom';

function ErrorAlert(props) {
    const { errMsg } = props;
    const history = useHistory();
    return <Alert
        closable={true}
        showIcon={true}
        type={"warning"}
        message={errMsg}
        description={"搜索失败，请点击关闭按钮返回上一步"}
        afterClose={() => history.goBack()}
    />
}

export default ErrorAlert;