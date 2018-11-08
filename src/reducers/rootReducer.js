import { combineReducers } from 'redux';
import { exampleReducer } from './exampleReducer';

const rootReducer = combineReducers({
    reducer: exampleReducer
});

export default rootReducer;