import { ButtonHTMLAttributes } from 'react';

import { ButtonSend } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonSend 
      className={`button ${isOutlined ? 'outlined' : ''}`} 
      {...props} 
    />
  );
}