import React, { Fragment, useEffect } from 'react';
import { useGetTopics } from '../../store/action';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { List, Col } from 'antd';
import UserAvatar from '../../component/userAvatar';
import FromNow from '../../component/fromNow';
import TopicTag from '../../component/topicTag';


function IndexList(props) {

    const getTopics = useGetTopics();
    const { push } = useHistory();
    //获取search并转为对象形式
    const { search } = useLocation();
    const { tab: searchTab = "all", page = 1, limit = 20 } = qs.parse(search.slice(1))
    //获取store得topics数据
    const { data, loading } = useSelector(state => state.topics);
    console.log(data);

    useEffect(() => {
        //url改变时，从服务器端获取数据，并存入store
        getTopics(searchTab, page, limit)
    }, [searchTab, page, limit])


    //引入样式文件
    const { style } = props;
    const { listItem, avatar, visitCount,big,visit, titleWrap,listTitle,listEnd,fromNow,activedCount} = style;
    return <Fragment>
        <List style={{ background: "white" }}
            loading={{
                size: "large",
                spinning: loading,
            }}
            dataSource={data}
            renderItem={item => {
                const { author, reply_count, visit_count, id, title, tab, top, good, last_reply_at } = item;
                return <List.Item className={listItem}>
                    <Col xs={2} xm={1} md={1}
                        className={avatar}
                    >
                        <Link to={`/user/${author.loginname}`}>
                            <UserAvatar url={author.avatar_url} />
                        </Link>
                    </Col>
                    <Col xs={0} xm={0} md={2}
                        className={visitCount}
                    >
                        {reply_count}/<span class={big, visit}>{visit_count}</span>
                    </Col>
                    <Col xs={18} xm={20} md={19}
                        className={titleWrap}
                    >
                        <TopicTag
                            searchTab={searchTab}
                            tab={tab}
                            top={top}
                            good={good}
                        />
                        <Link to={`/topic/${id}`}
                            title={title} 
                            className={listTitle}
                        >{title}</Link>
                    </Col>
                    <Col xs={4} xm={3} md={2}
                    className={listEnd}
                    >
                        <span className={fromNow}>
                            <FromNow time={last_reply_at} />
                        </span>
                        <br />
                        <span className={activedCount}>
                            {reply_count}/<span class={visit}>{visit_count}</span>
                        </span>
                    </Col>
                </List.Item >
            }}
            pagination={{
                showQuickJumper: true,
                responsive: true,
                total: 1000,
                current: +page,
                pageSize: +limit,
                pageSizeOptions: ['10', '20', '50'],
                onChange(afterPage, afterPageSize) {
                    let newPage = 0;
                    if (afterPageSize === +limit) {
                        newPage = afterPage;
                    } else {
                        let hasReadPages = page - 1;
                        let hasReadTopics = hasReadPages * limit;
                        let afterAccuratePage = hasReadTopics / afterPageSize;
                        let isInteger = Number.isInteger(afterAccuratePage)
                        newPage = isInteger ? (afterAccuratePage + 1) : Math.ceil(afterAccuratePage)
                    }
                    push(`/?tab=${searchTab}&page=${newPage}&limit=${afterPageSize}`);
                }
            }}
        />
    </Fragment >
}


export default IndexList;