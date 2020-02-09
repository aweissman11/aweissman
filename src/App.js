import React from 'react';
// Content
import ThemeContextProvider from './Contexts/ThemeContext.react';
import AppContainer from './Components/AppContainer/AppContainer.react';

function App() {
  return (
    <ThemeContextProvider>
      <AppContainer />
    </ThemeContextProvider>
  );
}

export default App;
