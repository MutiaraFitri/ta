import personReducers from './personReducers';
import ticketReducers from './ticketReducers';
import notificationReducer from './notificationReducer';
import summaryReducers from './summaryReducer';
import kbReducers from './kbReducers';
import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    personState: personReducers,
    kb: kbReducers,
    summary:summaryReducers,
    notification:notificationReducer,
    ticketState: ticketReducers,
    databaru: "hello"
});

export default rootReducers
