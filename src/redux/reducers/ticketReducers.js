const initState = {
    data: null
}

const ticketReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_TIKET_SUCCESS':
            return {
                ...state,
                data:action.value
            }
        case 'FETCH_TICKET_PENDING':
            return {
                ...state,
                data: action.value
            }
        case 'FETCH_TICKET_ERROR':
            return {
                ...state,
                data: action.value
            }
        default:
            return state
    }
};

export default ticketReducers;