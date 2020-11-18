function topics(topics = {
    data: [],
    loading: false
}, action) {
    switch (action.type) {
        case "TOPICS_LOADING":
            return {
                ...topics,
                loading: true
            }
        case "TOPICS_LOAD":
            return {
                data: action.data,
                loading: false
            }
        default:
            return topics;

    }
}


export default topics;