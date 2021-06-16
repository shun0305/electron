import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAction } from '../actions/UserActions';
import { IState } from '../states/IState';
import IUser from '../states/IUser';
import CountButton from './CountButton';
import TextBox from './TextBox';

const UserForm: React.FC<IUser> = () => {
  // useSelectorでステートの変更を受け取る
  const { name, count } = useSelector<IState, IUser>((a = a.user));
  const dispatch = useDispatch();

  const onNameChange = useCallback((value: string) => {
    // 名前を変更した時(タイプするたび)のイベント
    // 後で実装
  }, []); // []空白は初回のみという意味

  const onCountClick = useCallback(() => {
    // 訪問ボタン押した時のイベント
    dispatch(changeUserAction({ count: count + 1 }));
  }, [count]);

  return (
    <div>
      <p>
        <TextBox value={name} label="ユーザー名" onChangeText={onNameChange} />
      </p>
      <p>
        <CountButton count={count} label="訪問" onClick={onCountClick} />
      </p>
    </div>
  );
};
