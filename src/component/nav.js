import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Menu } from 'antd';

function Nav(props) {
    const { theme, getSelected, navs,id=null } = props
    const location = useLocation();
    const selectedKey = getSelected(location)
    return <Menu
        id={id}
        theme={theme}
        mode="horizontal" //把导航栏调成横向的
        selectedKeys={[ selectedKey + "" ]}>
        {
            navs.map((item, index) => {
                return <Menu.Item key={index}>
                    <Link to={item.to}>{item.title}</Link>
                </Menu.Item>
            })
        }
    </Menu>

}

export default Nav;