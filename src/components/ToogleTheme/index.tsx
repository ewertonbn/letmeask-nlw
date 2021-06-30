import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import { ToggleButton } from './styles'

interface ToogleThemeProps {
  toggleTheme: () => void;
}

export function ToogleTheme({ toggleTheme }: ToogleThemeProps) {
  const { colors, title } = useContext(ThemeContext);

  return(
    <>
      <ToggleButton>
        <span>Light/Dark</span>
        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={50}
          handleDiameter={30}
          offColor={colors.gray300}
          onColor={colors.gray400}
          onHandleColor={colors.secondary}
          offHandleColor={colors.secondary}
        />
      </ToggleButton>
    </>
  );
}