import React, { useMemo, useCallback } from 'react';

interface IProps {
  label: string;
  type: 'text' | `password`;
  value: string;
  // 値の確定時にその値を親プロパティが習得するためにコールバック関数を提供する
  onChangeText: (value: string) => void;
}

const TextBox: React.FC<IProps> = props => {
  // ラベルコンポーネントをメモ化して毎回判定しないようにする
  const label = useMemo(() => {
    // ラベルが設定されてない場合は、labelを出力しない
    return !!props.label ? <label>{props.label}</label> : null;
  }, [props.label]);

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      props.onChangeText(value);
    },
    [props.onChangeText],
  );
  return (
    <span>
      {label}
      <input
        name="username"
        type={props.type}
        value={props.value}
        onChange={onValueChange}
      />
    </span>
  );
};

export default TextBox;
