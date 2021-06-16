import { combineReducers, createStore } from 'redux';
import { IState } from './states/IState';
import userReducer from './reducers/UserReducers';

// 複数のreducerを束ねる
const combinedReducer = combineReducers<IState>({
  user: userReducer,
  // reducerが増えたら足していく
});

// グローバルオブジェクトとして、storeを作成する。
export const store = createStore(combinedReducer);

// import store from './Store' とアクセスできるようにdefault として定義する
export default store;
