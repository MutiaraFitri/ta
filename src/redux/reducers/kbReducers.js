const initState = {
    data: null
}

const kbReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_KB_SUCCESS':
            return {
                ...state,
                data: action.value
            }
        case 'FETCH_KB_PENDING':
            return {
                ...state,
                data: action.value
            }
        case 'FETCH_KB_ERROR':
            return {
                ...state,
                data: action.value
            }
        default:
            return state
    }
};

export default kbReducers;