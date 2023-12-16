/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cover from '../../components/Cover';
import axios from 'axios';

const SignUp = () => {
  // 성별 구분
  const [checkedSexValues, setCheckedSexValues] = useState([]);

  // 회원가입 정보 저장할 상태 변수
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [checkPW, setCheckPW] = useState('');
  const [nickname, setNickname] = useState('');
  const [existence, setExistence] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [gender, setGender] = useState('FEMAIL');
  const [agreementChecked, setAgreementChecked] = useState(false);

  // 중복 확인 상태(state)
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  // 네비게이션
  const navigate = useNavigate();

  // 이메일 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 이메일 유효성 검사 함수

  // eslint-disable-next-line no-shadow
  const validateEmail = email => emailRegex.test(email);

  // 회원가입 상태
  const [disabled, setDisabled] = useState(true);

  const apiURL = process.env.REACT_APP_API_URL;

  const ok = '사용 가능한 닉네임입니다.';
  const no = '이미 존재하는 닉네임입니다.';

  const checkSex = value => {
    if (checkedSexValues.includes(value)) {
      setCheckedSexValues([]);
      setGender('');
    } else {
      setCheckedSexValues([value]);
      setGender(value);
    }
  };

  // 이메일 중복 체크
  async function checkEmail() {
    console.log('이메일 확인 : ', email);

    if (!validateEmail(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }

    const res = await axios.post(`${apiURL}/users/check-email`, {
      email,
    });

    console.log('답장 확인', res);

    if (res.data === true) {
      setIsEmailChecked(true);
      alert('사용 가능한 이메일입니다.');
    } else {
      setIsEmailChecked(false);
      alert('이미 존재하는 이메일입니다.');
    }
  }

  // 닉네임 중복 체크
  async function checkNickname() {
    const res = await axios.post(`${apiURL}/users/check-nickname`, {
      nickname,
    });
    console.log('답장 확인', res);

    if (res.data === true) {
      setExistence(ok);
      setIsNicknameChecked(true);
    } else {
      setExistence(no);
      setIsNicknameChecked(false);
    }
    alert(existence);
  }

  // 회원가입
  async function signup() {
    // 중복 확인 X
    if (!isEmailChecked || !isNicknameChecked) {
      alert('이메일과 닉네임 중복 확인을 해주세요.');
      return;
    }

    const res = await axios.post(`${apiURL}/users/join`, {
      email,
      pw,
      gender,
      nickname,
    });
    console.log('signup: ', res);
    if (res.status === 201) {
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } else {
      // 실패 시
      alert('회원가입에 실패했습니다. 잘못된 값을 수정해주세요.');
    }
  }

  const AgreementChange = () => {
    setAgreementChecked(!agreementChecked);
  };

  const Submit = e => {
    e.preventDefault();

    // 체크박스가 체크되지 않으면
    if (!agreementChecked) {
      alert('약관에 동의해야 회원가입이 가능합니다.');
      return;
    }

    // 나머지 로직 수행
    signup();
  };

  // useEffect(() => {
  //   console.log(email, nickname, pw, gender);
  // });

  // 비밀번호 일치하는지
  useEffect(() => {
    const errMsg = pw !== checkPW ? '비밀번호가 일치하지 않습니다.' : '';
    setErrorMessage(errMsg);
  }, [pw, checkPW]);

  useEffect(() => {
    if (nickname !== '') alert(existence);
  }, [existence]);

  // 데이터 값 없거나 에러
  useEffect(() => {
    setDisabled(!(email && pw && checkPW && nickname && !errorMessage));
  }, [email, pw, checkPW, nickname, errorMessage]);

  return (
    <Wrapper>
      <Cover />
      <SignUpWrapper>
        <Title>회원가입</Title>
        <Form onSubmit={Submit}>
          <InputBox>
            <Label>아이디(이메일)</Label>
            <InputStyleBox yes="80px">
              <Input
                className="input"
                type="text"
                placeholder="이메일을 입력하세요"
                onChange={e => setEmail(e.target.value)}
              />
              <InputLine />
            </InputStyleBox>
            <SmallBtn onClick={() => checkEmail(email)}>중복확인</SmallBtn>
          </InputBox>
          <InputBox>
            <Label>비밀번호</Label>
            <InputStyleBox yes="112px">
              <Input
                className="input"
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={e => setPW(e.target.value)}
              />
              <InputLine />
            </InputStyleBox>
          </InputBox>
          <InputBox>
            <Label>비밀번호 확인</Label>
            <InputStyleBox yes="85px">
              <Input
                className="input"
                type="password"
                placeholder="비밀번호를 다시 입력하세요 "
                onChange={e => setCheckPW(e.target.value)}
              />
              <InputLine />
              {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            </InputStyleBox>
          </InputBox>
          <InputBox>
            <Label>닉네임</Label>
            <InputStyleBox yes="122px">
              <Input
                className="input"
                type="text"
                placeholder="닉네임을 입력하세요"
                onChange={e => setNickname(e.target.value)}
              />
              <InputLine />
            </InputStyleBox>
            <SmallBtn onClick={() => checkNickname()}>중복 확인</SmallBtn>
          </InputBox>
          <InputBox>
            <Label>성별</Label>
            <InputStyleBox yes>
              <CheckBoxLabel>
                <CheckInput
                  className="input"
                  type="checkbox"
                  name="sex"
                  value="FEMALE"
                  checked={checkedSexValues.includes('FEMALE')}
                  onChange={() => checkSex('FEMALE')}
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
                  value="MALE"
                  checked={checkedSexValues.includes('MALE')}
                  onChange={() => checkSex('MALE')}
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
                  value="SECRECT"
                  checked={checkedSexValues.includes('SECRECT')}
                  onChange={() => checkSex('SECRECT')}
                />
                비밀
              </CheckBoxLabel>
            </InputStyleBox>
          </InputBox>
          <AgreementLabel>
            <CheckInput
              className="input"
              type="checkbox"
              checked={agreementChecked}
              onChange={AgreementChange}
            />
            <p>(필수) 본인은 만 14세 이상이며 개인 정보 수집에 동의합니다.</p>
          </AgreementLabel>
        </Form>
        <ConfirmBtn
          onClick={() => {
            signup();
          }}
          type="submit"
        >
          확인
        </ConfirmBtn>
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

const ErrorText = styled.p`
  color: #ff5757;
`;

export default SignUp;
