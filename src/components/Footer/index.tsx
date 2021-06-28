import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

interface FooterProps {
  toggleTheme: () => void;
}

export function Footer({ toggleTheme }: FooterProps) {
  const { colors, title } = useContext(ThemeContext);

  return(
    <Switch 
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={20}
      width={40}
      handleDiameter={30}
      offColor={colors.grayDark}
      onColor={colors.grayMedium}
      onHandleColor={colors.purple}
      offHandleColor={colors.purple}
    />
  );
}