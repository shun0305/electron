import { reducerWithoutInitialState } from 'typescript-fsa-reducers';
import { changeUserAction } from '../actions/UserActions';
import IUser from '../states/IUser';

// Stateの初期値
const initUser: IUser = {
  count: 0,
  name: '',
};

const userReducer =
  // 上は、下記と同じ意味
  // const user = Object.assign({}, state, payload);
  // return user;
  reducerWithoutInitialState<IUser>(initUser)
    // Actionごとに`.case`をメソッドチェーンでつなぐ
    // 1番目の引数は、アクション、2番目が処理の関数
    // 処理の関数の引数は、1番目が変更前の State、2番目が Action の値
    // 必ず、Stateと同じ型(ここでは、IUser)のオブジェクトを return する必要がある。
    // payload はここでは、Actionで指定した`Partial<IUser>`の型のオブジェクト。

    .case(changeUserAction, (state, payload) => ({
      ...state,
      ...payload,
    })).build;

export default userReducer;
