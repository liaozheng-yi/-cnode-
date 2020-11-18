import { Card } from 'antd';
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ErrorAlert from '../../component/errorAlert';
import FromNow from '../../component/fromNow';
import UserAvatar from '../../component/userAvatar';
import { useUser } from '../../store/action';
import UserTopicsList from './user_topics_list';
import userStyle from '../../static/css/user.module.css';


function PageUser() {
    const { username } = useParams();
    const getData = useUser();
    useEffect(() => {
        getData(username)
    }, [username])
    const user = useSelector(state => state.user)
    const { data, loading, error, errMsg } = user;
    const { avatar_url, create_at, githubUsername, recent_replies, recent_topics } = data;
    console.log(data)
    return <div>
        {
            error ? <ErrorAlert errMsg={errMsg} /> :
                (<Fragment>
                    <Card
                        headStyle={{ padding: "0 15px", margin: "0 0px" }}
                        bodyStyle={{ padding: "10px 15px" }}
                        className="topicCard"
                        type="inner"
                        loading={loading}
                        title={<Link to="/" >首页/</Link>}
                    >
                        <p><UserAvatar url={avatar_url} /> {username} </p>
                        <p>github： <a
                            href={`https://github.com/${githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >{githubUsername}</a></p>
                        <p>注册时间： <FromNow time={create_at} /></p>
                    </Card>

                    <Card
                        title={"最近创建的话题"}
                        headStyle={{ padding: "0 15px", margin: "0 0px" }}
                        bodyStyle={{ padding: "10px 15px" }}
                        className="topicCard"
                        type="inner"
                        loading={loading}
                    >
                        <UserTopicsList
                            data={recent_topics}
                            loading={loading}
                            userStyle={userStyle}
                        />
                    </Card>

                    <Card
                        title={"最近参与的话题"}
                        headStyle={{ padding: "0 15px", margin: "0 0px" }}
                        bodyStyle={{ padding: "10px 15px" }}
                        className="topicCard"
                        type="inner"
                        loading={loading}
                    >
                        <UserTopicsList
                            data={recent_replies}
                            loading={loading}
                            userStyle={userStyle}

                        />
                    </Card>
                </Fragment>)
        }
    </div>


}

export default PageUser;