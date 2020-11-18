function topicContent(topicContent = {
    data: {},
    loading: true,
    error: false,
    errMsg: ""
}, action) {
    switch (action.type) {
        case "CONTENT_LOADING":
            return {
                data: {},
                loading: true,
                error: false,
                errMsg: ""
            }
        case "CONTENT_LOAD":
            return {
                ...topicContent,
                data: action.data,
                loading: false
            }
        case "CONTENT_LOAD_ERROR":
            return {
                data: {},
                loading: false,
                error: true,
                errMsg: action.errMsg
            }
        default:
            return topicContent;

    }
}

export default topicContent;