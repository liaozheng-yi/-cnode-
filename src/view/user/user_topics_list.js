import { Col, List } from 'antd';
import React from 'react';
import UserAvatar from '../../component/userAvatar';
import FromNow from '../../component/fromNow';
import { Link } from 'react-router-dom';


function UserTopicsList(props) {
    const { data, loading, userStyle } = props;
    // 引入样式
    const { listItem, listTitle,listTitleWrap, fromNow } = userStyle;
    return <List style={{ background: "white" }}
        loading={{
            size: "large",
            spinning: loading,
        }}
        dataSource={data}
        renderItem={item => {
            const { author, id, title, last_reply_at } = item;
            return <List.Item className={listItem} >
                <Col xs={3} sm={2} md={1}>
                    <Link to={`/user/${author.loginname}`} >
                        <UserAvatar url={author.avatar_url} />
                    </Link>
                </Col>
                <Col
                    xs={21} sm={20} md={21}
                    id={listTitleWrap}
                >
                    <span>&nbsp;</span>
                    <Link to={`/topic/${id}`}
                        className={listTitle}
                        title={title}
                    >{title}</Link>
                </Col>
                <Col
                    xs={0} sm={2} md={2}
                    className={fromNow}
                >
                    <FromNow time={last_reply_at} />
                </Col>
            </List.Item>
        }}
    />
}

export default UserTopicsList;