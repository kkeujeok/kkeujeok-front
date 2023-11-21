import styled from 'styled-components';
import SignIn from './user/SignIn';
import { ReactComponent as CoverImg } from '../imgs/cover.svg';
import GroundImg from '../imgs/ground.png';

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const CoverBox = styled.div`
  width: 50%;
  height: 100%;
`;

const SignInCover = styled(SignIn)``;

const Main = () => (
  <MainWrapper>
    <CoverBox>
      <p>dd</p>
      {/* <MainCover /> */}
      {/* <Ground /> */}
    </CoverBox>
    <SignInCover />
  </MainWrapper>
);

export default Main;
