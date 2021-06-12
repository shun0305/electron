import React, { useCallback } from 'react';
import IUser from '../states/IUser';
import CountButton from './CountButton';
import TextBox from './TextBox';

const UserForm: React.FC<IUser> = props => {
  const { name, count } = props;
  const onNameChange = useCallback((value: string) => {
    // 名前を変更した時(タイプするたび)のイベント
    // 後で実装
  }, []); //[]空白は初回のみという意味

  const onCountClick = useCallback(() => {
    // 訪問ボタン押した時のイベント
    // 後で実装
  }, []);

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
