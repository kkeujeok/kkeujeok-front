import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignIn = () => (
  <SignInWrapper>
    <Title>끄적끄적</Title>
    <Form>
      <InputBox>
        <Label>아이디</Label>
        <InputStyleBox yes>
          <Input className="input" type="text" placeholder="아이디를 입력하세요" />
          <InputLine />
        </InputStyleBox>
      </InputBox>
      <InputBox>
        <Label>비밀번호</Label>
        <InputStyleBox>
          <Input className="input" type="password" placeholder="비밀번호를 입력하세요" />
          <InputLine />
        </InputStyleBox>
      </InputBox>
    </Form>
    <LoginBtn to="/home">로그인</LoginBtn>
    <BtnBox>
      <BtnUser to="/signUp" title="회원가입">
        회원가입 /
      </BtnUser>
      <BtnUser to="/findPw" pw>
        비밀번호 찾기
      </BtnUser>
    </BtnBox>
  </SignInWrapper>
);

const SignInWrapper = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #ffff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 80px;
  margin-top: 15%;
  margin-bottom: 5%;
`;
const Form = styled.p`
  margin: 0;
`;

const InputBox = styled.p`
  margin: 50px;
  display: flex;
`;

const Label = styled.p`
  font-size: 18px;
`;

const InputStyleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 67px;
  margin-top: 10px;
  margin-left: ${props => (props.yes ? '79px' : '67px')};
`;

const Input = styled.input`
  font-size: 16px;
  margin: 0 0 0 10px;
  border-width: 0;
  background-color: none;
  outline: none;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const InputLine = styled.hr`
  width: 280px;
  height: 4px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    88deg,
    #b3a5ca 51.4%,
    rgba(132, 174, 255, 0) 113.14%,
    rgba(50, 76, 128, 0) 124.57%
  );
`;

const BtnBox = styled.div`
  display: flex;
  margin-top: 30px;
`;

const BtnUser = styled(Link)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #2e2e2e;
  margin-left: ${props => (props.pw ? '5px' : 0)};
`;

const LoginBtn = styled(Link)`
  width: 226px;
  height: 15px;
  border-radius: 10px;
  background: #724dbc;
  color: #fff;
  text-align: center;
  font-size: 18px;
  border: none;
  padding: 20px;

  &:hover {
    background-color: #6e52a5;
  }
`;

export default SignIn;
