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

        default:
            return state
    }
};

export default authReducers;