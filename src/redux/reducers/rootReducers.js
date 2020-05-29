import personReducers from './personReducers';
import ticketReducers from './ticketReducers';
import kbReducers from './kbReducers';
import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    personState: personReducers,
    kb: kbReducers,
    ticketState: ticketReducers,
    databaru: "hello"
});

export default rootReducers
