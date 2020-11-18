import React from 'react';
import {indexNavs} from '../../router/router_list';
import Nav from '../../component/nav';
import qs from 'qs';

function IndexNav(){
    return <Nav
        navs={indexNavs}
        theme={null}
        getSelected={(location)=>{
            const {search} = location;
            let tabType = qs.parse(search.slice(1)).tab;
            if(tabType===undefined)tabType="all";//首页默认为全部
            return indexNavs.findIndex((item)=>{
                let itemTab = qs.parse(item.to.slice(2)).tab
                return itemTab === tabType
            })
        }}
    />
}


export default IndexNav;