
import { useDispatch } from "react-redux"
import http from "../http"

function useGetTopics() {
    const dispatch = useDispatch();
    return (tab, page, limit) => {
        dispatch({
            type: "TOPICS_LOADING"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}`)
            .then((res) => {
                dispatch({
                    type: "TOPICS_LOAD",
                    data: res.data.data
                })
            })
    }
}

function useTopicContent() {
    const dispatch = useDispatch();
    return (id) => {
        dispatch({
            type: "CONTENT_LOADING"
        })
        http.get(`/topic/${id}`)
            .then((res) => {
                dispatch({
                    type: "CONTENT_LOAD",
                    data: res.data.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "CONTENT_LOAD_ERROR",
                    errMsg: err.response.data.error_msg,
                })
            })
    }
}

function useUser() {
    const dispatch = useDispatch();
    return (username) => {
        dispatch({
            type: "USER_LOADING"
        })
        http.get(`/user/${username}`)
            .then((res) => {
                dispatch({
                    type: "USER_LOAD",
                    data: res.data.data
                })
            })
            .catch((err) => {
                console.log("err", err.response);
                dispatch({
                    type: "USER_ERROR",
                    errMsg: err.response.data.error_msg,
                })
            })
    }

}

export { useGetTopics, useTopicContent, useUser }