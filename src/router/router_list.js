import React from 'react';
import Page404 from '../view/404';
import PageAbout from '../view/about';
import PageApi from '../view/api';
import PageGetStart from '../view/getstart';
import PageIndex from '../view/index';
import PageTopic from '../view/topic';
import PageUser from '../view/user';
import qs from 'qs';

const tabs = ['all','good','share','ask','job']
const limits = ['10','20','50']

const routes = [{
    path:'/',
    exact:true,
    render(props){
        const {location} = props;
        const {search} = location;
        let {tab,page,limit} = qs.parse(search.slice(1))
        page = +page;
        // console.log({tab,page,limit});
        // console.log(tabs.includes(tab),isNaN(page),limit===undefined);
        if(tab===undefined
            ||(tabs.includes(tab)&&page>0&&Number.isInteger(page)&&page<=50&&limit===undefined)
            ||(tabs.includes(tab)&&isNaN(page)&&limit===undefined)
            ||(tabs.includes(tab)&&page>0&&Number.isInteger(page)&&page<=1000/limit&&limits.includes(limit)) 
            ){return <PageIndex {...props}/>}
        else{return <Page404 {...props}/>}
    }
},{
    path:'/topic/:id',
    exact:true,
    render(props){return<PageTopic {...props}/>}
},{
    path:'/user/:username',
    exact:true,
    render(props){return<PageUser {...props}/>}
},{
    path:'/getstart',
    exact:true,
    render(props){return<PageGetStart {...props}/>}
},{
    path:'/api',
    exact:true,
    render(props){return<PageApi {...props}/>}
},{
    path:'/about',
    exact:true,
    render(props){return<PageAbout {...props}/>}
},{
    path:'/',
    exact:false,
    render(props){return<Page404 {...props}/>}
}]

const navs = [{
    to:'/',
    title:'首页'
},{
    to:'/getstart',
    title:'新手入门'
},{
    to:'/api',
    title:'API'
},{
    to:'/about',
    title:'关于'
},]

const indexNavs=[{
    to:'/?tab=all',
    title:'全部'
},{
    to:'/?tab=good',
    title:'精华'
},{
    to:'/?tab=share',
    title:'分享'
},{
    to:'/?tab=ask',
    title:'问答'
},{
    to:'/?tab=job',
    title:'招聘'
}]
export  {routes,navs,indexNavs};