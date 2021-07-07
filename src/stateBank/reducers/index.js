import { combineReducers } from 'redux';
import tailerreducer from './tailerReducer';

const management = combineReducers({
    balance: tailerreducer,

});

export default management;

