const initState = {
    data: null
}

const authReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: action.value
            }
        case 'FETCH_PENDING':
            return {
                ...state,
                data: action.value
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                data: action.value
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                data: action.value
            }
        case 'FETCH_TIKET_SUCCESS':
            return {
                ...state,
                data: action.value
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
            }

        case 'Request_Reset_Password_Success':
            return {
                ...state,
                reqResetPassword: action.value
            }
        case 'Request_Reset_Password_Failed':
            return {
                ...state,
                reqResetPassword: action.value
            }
        case 'UPDATE_PASSWORD_SUCCESS':
            return {
                ...state,
                reqResetPassword: action.value
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed',
                message: action.value
            }

        default:
            return state
    }
};

export default authReducers;