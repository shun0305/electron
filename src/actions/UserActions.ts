import { actionCreatorFactory } from 'typescript-fsa';
import IUser from '../states/IUser';

// action creater を作成する
// 引数はアクションのグループごとに一意
// ファイル単位で、1つのcreaterがあれば良い
const actionCreater = actionCreatorFactory('user-action');

// アクションの定義
// 引数は（おpな時 creater から生成される）アクションごとに一意
export const changeUserAction = actionCreater<Partial<IUser>>('change-user');
