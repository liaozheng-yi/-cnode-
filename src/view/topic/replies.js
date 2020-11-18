import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../../component/userAvatar.js';
import { Card, List, Comment } from 'antd';
import FromNow from '../../component/fromNow.js';

function Replies(props) {
    const { replies = [], loading } = props;
    replies.reverse();
    // console.log(replies, loading);
    return <Card
        className="topicCard"
        type="inner"
        headStyle={{ padding: "0 15px", margin: "0 0px" }}
        bodyStyle={{ padding: "10px 15px" }}
        title={loading ? "" : `${replies.length} 条回复`}
        loading={loading}
    >
        <List id="repliesList"
            dataSource={replies}
            renderItem={item => (
                <List.Item>
                    <Comment
                        author={<Link to={`/user/${item.author.loginname}`}>
                            {item.author.loginname}
                        </Link>}
                        avatar={
                            <Link to={`/user/${item.author.loginname}`}>
                                <UserAvatar url={item.author.avatar_url} />
                            </Link>
                        }
                        content={<div
                            dangerouslySetInnerHTML={{
                                __html: item.content,
                            }}
                        >
                        </div>}
                        datetime={<time>发表于：<FromNow time={item.create_at} /></time>}
                    />
                </List.Item>
            )}
            pagination={{
                simple:true 
            }}
        />
    </Card>

}


export default Replies;