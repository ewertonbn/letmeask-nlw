import { ReactNode, useContext } from "react";

import { HeaderContainer } from './styles'

type HeaderProps = {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <HeaderContainer>
      <div className="content">
        {children}
      </div>
    </HeaderContainer>
  );
}