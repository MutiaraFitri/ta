import personReducers from './personReducers';
import ticketReducers from './ticketReducers';
import notificationReducer from './notificationReducer';
import kbReducers from './kbReducers';
import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    personState: personReducers,
    kb: kbReducers,
    notification:notificationReducer,
    ticketState: ticketReducers,
    databaru: "hello"
});

export default rootReducers
