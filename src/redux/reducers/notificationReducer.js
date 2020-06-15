const initState = {
    data: null
  }
  
  const notificationReducer = (state = initState, action) => {
    switch (action.type) {
      case 'FETCH_NOTIFICATION_SUCCESS':
        // console.log('Fetch Person from API TICKET');
        // console.log(action.value);
        return {
          ...state,
          data: action.value.values
        }
  
      default:
        return state
    }
  };
  
  export default notificationReducer;
  
  