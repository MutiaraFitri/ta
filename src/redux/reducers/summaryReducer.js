const initState = {
    data: null
}

const summaryReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SUMMARY_ASSIGN':
            return {
                ...state,
                dataAssign: action.value
            }
        case 'FETCH_SUMMARY_DONE':
            return {
                ...state,
                dataDone: action.value
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

export default summaryReducers;