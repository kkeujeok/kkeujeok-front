import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { defaultTheme } from './styles/theme';

import SignUp from './pages/user/SignUp';
import FindPw from './pages/user/FindPw';
import Home from './pages/home/Home';
import Friends from './pages/Friends';
import Ranking from './pages/Ranking';

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/findPw" element={<FindPw />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/rank" element={<Ranking />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
