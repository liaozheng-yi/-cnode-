import React from 'react';
import {  Avatar} from 'antd';
//引入头像加载不成功的icon
import { createFromIconfontCN } from '@ant-design/icons';

const UserIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2099677_bqf80rdqx5r.js'
})

function UserAvatar(props) {
    return <Avatar icon={< UserIcon type="icon-BARISTA" size={100}/>}
        shape="circle"
        src={props.url}
    />
}

export default UserAvatar;