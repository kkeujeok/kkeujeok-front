import { Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
