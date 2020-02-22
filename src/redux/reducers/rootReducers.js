import personReducers from './personReducers';
import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    personState: personReducers,
});

export default rootReducers
