import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cover from '../../components/Cover';

const SignUp = () => {
  const [checkedSexValues, setCheckedSexValues] = useState([]);
  const checkSex = value => {
    if (checkedSexValues.includes(value)) {
      setCheckedSexValues(checkedSexValues.filter(v => v !== value));
    } else {
      setCheckedSexValues([value]);
    }
  };
  // useEffect(() => {
  //   // 수정된 값 확인
  //   // eslint-disable-next-line no-console
  //   console.log('dddd:', checkedSexValues);
  // }, [checkedSexValues]);
  return (
    <Wrapper>
      <Cover />
      <SignUpWrapper>
        <Title>회원가입</Title>
        <Form>
          <InputBox>
            <Label>아이디(이메일)</Label>
            <InputStyleBox yes="80px">
              <Input className="input" type="text" placeholder="이메일을 입력하세요" />
              <InputLine />
            </InputStyleBox>
            <SmallBtn>전송</SmallBtn>
          </InputBox>
          <InputBox>
            <Label>이메일 인증 코드</Label>
            <InputStyleBox>
              <Input className="input" type="text" placeholder="인증코드를 입력하세요" />
              <InputLine />
            </InputStyleBox>
            <SmallBtn>인증</SmallBtn>
          </InputBox>
          <InputBox>
            <Label>비밀번호</Label>
            <InputStyleBox yes="112px">
              <Input className="input" type="text" placeholder="비밀번호를 입력하세요" />
              <InputLine />
            </InputStyleBox>
          </InputBox>
          <InputBox>
            <Label>비밀번호 확인</Label>
            <InputStyleBox yes="85px">
              <Input className="input" type="text" placeholder="비밀번호를 다시 입력하세요 " />
              <InputLine />
            </InputStyleBox>
          </InputBox>
          <InputBox>
            <Label>닉네임</Label>
            <InputStyleBox yes="122px">
              <Input className="input" type="text" placeholder="이메일을 입력하세요" />
              <InputLine />
            </InputStyleBox>
            <SmallBtn>중복 확인</SmallBtn>
          </InputBox>
          <InputBox>
            <Label>성별</Label>
            <InputStyleBox yes>
              <CheckBoxLabel>
                <CheckInput
                  className="input"
                  type="checkbox"
                  name="sex"
                  value="1"
                  checked={checkedSexValues.includes('1')}
                  onChange={() => checkSex('1')}
                />
                여성
              </CheckBoxLabel>
            </InputStyleBox>
            <InputStyleBox yes>
              <CheckBoxLabel>
                <CheckInput
                  className="input"
                  type="checkbox"
                  name="sex"
                  value="2"
                  checked={checkedSexValues.includes('2')}
                  onChange={() => checkSex('2')}
                />
                남성
              </CheckBoxLabel>
            </InputStyleBox>
            <InputStyleBox yes>
              <CheckBoxLabel>
                <CheckInput
                  className="input"
                  type="checkbox"
                  name="sex"
                  value="3"
                  checked={checkedSexValues.includes('3')}
                  onChange={() => checkSex('3')}
                />
                비밀
              </CheckBoxLabel>
            </InputStyleBox>
          </InputBox>
          <AgreementLabel>
            <CheckInput className="input" type="checkbox" />
            <p>(필수) 본인은 만 14세 이상이며 개인 정보 수집에 동의합니다.</p>
          </AgreementLabel>
        </Form>
        <ConfirmBtn>확인</ConfirmBtn>
      </SignUpWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const SignUpWrapper = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffff;
  z-index: 200;
`;

const Title = styled.p`
  font-size: 40px;
  margin-top: 4%;
  margin-bottom: 0;
`;

const Form = styled.p`
  margin: 0;
`;

const InputBox = styled.p`
  margin: 36px;
  display: flex;
`;

const Label = styled.p`
  font-size: 14px;
`;

const InputStyleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 67px;
  margin-top: 10px;
  margin-left: ${props => props.yes || '70px'};
`;

const Input = styled.input`
  font-size: 13px;
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

const CheckInput = styled.input`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border: 1.5px solid ${({ theme }) => theme.colors.placeholder};
  border-radius: 0.35rem;
  margin-left: 40px;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.primary};
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

const SmallBtn = styled.button`
  width: 69px;
  height: 44px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 15px;
  border: none;
  padding-top: 5px;
  margin-left: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const ConfirmBtn = styled.button`
  width: 226px;
  height: 50px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  text-align: center;
  font-size: 18px;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

const AgreementLabel = styled.p`
  font-size: 12px;
  color: #898989;
  display: flex;
  display: flex;
  align-items: center;
  margin-left: 125px;
  margin-top: -20px;
`;

export default SignUp;
