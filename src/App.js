import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { defaultTheme } from './styles/theme';

import SignUp from './pages/user/SignUp';
import FindPw from './pages/user/FindPw';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/findPw" element={<FindPw />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
