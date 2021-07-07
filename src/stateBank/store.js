import {createStore} from 'redux';
import management from './reducers/index';

export const store = createStore(management, {});
