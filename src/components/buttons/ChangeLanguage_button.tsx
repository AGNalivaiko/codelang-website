import { Button } from 'antd';
import type { MouseEventHandler, FC } from 'react';

interface ButtonProp {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const ChangeLanguage_button: FC<ButtonProp> = ({ onClick, children }) => {
  return (
    <Button size='middle' type='text' style={{ color: 'white' }} onClick={onClick}>
      {children}
    </Button>
  );
};
