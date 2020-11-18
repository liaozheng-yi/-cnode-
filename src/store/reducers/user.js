function user(user = {
    data: {},
    loading: false,
    error: false,
    errMsg:""
}, action) {
    switch (action.type) {
        case "USER_LOADING":
            return {
                data: {},
                loading: true,
                error: false,
                errMsg:""
            }
        case "USER_LOAD":
            return {
                data: action.data,
                loading: false,
                error: false,
            }
        case "USER_ERROR":
            return {
                data: {},
                loading: false,
                error: true,
                errMsg: action.errMsg
            }
        default:
            return user;
    }
}

export default user;