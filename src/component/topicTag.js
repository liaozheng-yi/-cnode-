import { Tag } from 'antd';
import React from 'react';

function setTag(topicTag) {
    switch (topicTag) {
        case "top":
            return <Tag color="#80BD01" className="topicTag">置顶</Tag>
        case "good":
            return <Tag color="#80BD01" className="topicTag">精华</Tag>
        case "share":
            return <Tag color="#E5E5E5" className="topicTag">分享</Tag>
        case "ask":
            return <Tag color="#E5E5E5" className="topicTag">问答</Tag>
        case "job":
            return <Tag color="#E5E5E5" className="topicTag">招聘</Tag>
        default:
            return null;
    }

}

export default function TopicTag(props) {
    const { top, good, tab="ask", searchTab } = props;
    const indexTopicTag = top ? 'top' : (good ? 'good' : tab)
    const otherTopicTag = top ? 'top' : (good ? 'good' : null)
    return setTag(searchTab === "all" ? indexTopicTag : otherTopicTag)
};