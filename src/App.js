import { Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { defaultTheme } from './styles/theme';

import SignUp from './components/user/SignUp';
import FindPw from './components/user/FindPw';

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/findPw" element={<FindPw />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
