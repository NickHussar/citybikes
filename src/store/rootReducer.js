import {networksReducer} from './networks/reducers';
import {stationsReducer} from './stations/reducers';
import {combineReducers} from 'C:/Users/kotel/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

export default combineReducers({
    networks: networksReducer,
    stations: stationsReducer,
})