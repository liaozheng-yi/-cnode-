import React from 'react';
import IndexList from './index_list';
import IndexNav from './index_nav';
import indexStyle from '../../static/css/index.module.css';


function PageIndex() {
    return <div className="topicCard">
        <IndexNav />
        <IndexList style={indexStyle} />
    </div>
}

export default PageIndex;