import React from 'react';
import FromNow from '../../component/fromNow.js';
import TopicTag from '../../component/topicTag.js';
import { Card } from 'antd';

function tabToZh(tab) {
    switch (tab) {
        case "share":
            return "分享";
        case "ask":
            return "问答";
        case "job":
            return "招聘";
        default:
            return tab;
    }

}

function Detail(props) {
    const { loading, data } = props;
    const { top, tab="ask", good, create_at, author, visit_count, title, content } = data;
    return (
        <Card
            className="topicCard"
            loading={loading}
            headStyle={{ padding: "0 0", margin: "0 10px" }}
            bodyStyle={{ padding: "10px 15px" }}
            title={loading?"":(<div>
                <h1><TopicTag top={top} good={good} tab={tab} /><b>{title}</b></h1>
                <p className="detail">
                    <span> 发布于 <FromNow time={create_at} /> </span>
                    <span> 作者 {author.loginname} </span>
                    <span> {visit_count} 次浏览 </span>
                    <span> 来自 {tabToZh(tab)}</span>
                </p>
            </div>)}
        >
            <div dangerouslySetInnerHTML={{
                __html: content
            }}>
            </div>
        </Card>
    )
}

export default Detail;