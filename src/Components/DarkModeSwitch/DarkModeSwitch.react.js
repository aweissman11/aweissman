import React, { useContext, useState } from 'react';
import { SwitchToggle, TinyText } from './DarkModeSwitch.styled';
import { ThemeContext } from '../../Contexts/ThemeContext.react';

const DarkModeSwitch = () => {
  const { dispatch, theme } = useContext(ThemeContext);

  const [currentTheme, setCurrentTheme] = useState(theme);

  const switchTheme = () => {
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'CHANGE_THEME', theme: newTheme });
    setCurrentTheme(newTheme);
  }

  return (
    <SwitchToggle theme={theme}>
      <TinyText theme={theme}>Lights</TinyText>
      <label class="rocker">
        <input
          type="checkbox"
          checked={currentTheme === 'light'}
          onChange={switchTheme}
        />
        <span class="switch-left">On</span>
        <span class="switch-right">Off</span>
      </label>
    </SwitchToggle>
  );
}

export default DarkModeSwitch;