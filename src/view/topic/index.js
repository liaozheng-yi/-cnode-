import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ErrorAlert from '../../component/errorAlert.js';
import { useTopicContent } from '../../store/action/index.js';
import Detail from './detail.js';
import Replies from './replies.js';



function PageTopic() {
    const getTopicContent = useTopicContent();
    const { id } = useParams();
    const topicContent = useSelector(state => state.topicContent);
    const { data, loading, error, errMsg } = topicContent;
    useEffect(() => {
        getTopicContent(id)
    }, [id])
    return <div>
        {error
            ? <ErrorAlert errMsg={errMsg} />
            : (<Fragment>
                <Detail
                    data={data}
                    loading={loading}
                />
                <Replies
                    replies={data.replies}
                    loading={loading}
                />
            </Fragment>)
        }
    </div>
}

export default PageTopic;