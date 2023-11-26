import styled from 'styled-components';
import Cover from '../../components/Cover';
import { ReactComponent as EmailImg } from '../../imgs/Email.svg';

const FindPw = () => (
  <Wrapper>
    <Cover />
    <FindPwWrapper>
      <Title>비밀번호 찾기</Title>
      <Form>
        <InputBox>
          <Label>아이디(이메일)</Label>
          <InputStyleBox yes>
            <Input className="input" type="text" placeholder="이메일을 입력하세요" />
            <InputLine />
          </InputStyleBox>
        </InputBox>
      </Form>
      <ConfirmBtn>확인</ConfirmBtn>
    </FindPwWrapper>
    <EmailIcon />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const FindPwWrapper = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #ffff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
`;

const EmailIcon = styled(EmailImg)`
  position: absolute;
  width: 210px;
  height: auto;
  z-index: 220;
  bottom: 30px;
  right: 40%;
`;

const Title = styled.p`
  font-size: 60px;
  margin-top: 23%;
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

const ConfirmBtn = styled.button`
  width: 226px;
  height: 50px;
  border-radius: 10px;
  background: #724dbc;
  color: #fff;
  text-align: center;
  font-size: 18px;
  border: none;

  &:hover {
    background-color: #6e52a5;
  }
`;

export default FindPw;
