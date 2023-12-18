import styled from 'styled-components';
import SignIn from './user/SignIn';
import Cover from '../components/Cover';
import { ReactComponent as EmailImg } from '../imgs/Email.svg';

const Main = () => (
  <MainWrapper>
    <Cover />
    <SignIn />
    <EmailIcon />
  </MainWrapper>
);

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const EmailIcon = styled(EmailImg)`
  position: absolute;
  width: 210px;
  height: auto;
  z-index: 150;
  bottom: 30px;
  right: 40%;
`;

export default Main;
