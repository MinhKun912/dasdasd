import { createStore, applyMiddleware } from "redux";
import createReduxMiddleware from 'redux-saga';
import {rootSaga} from "../saga";
import {rootReducer} from "./reducer";
const sagaMiddleware = createReduxMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;

