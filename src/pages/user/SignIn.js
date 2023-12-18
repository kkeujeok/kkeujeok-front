/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const apiURL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  async function login() {
    console.log('ddd:', email, pw);

    if (email.trim() === '') {
      alert('아이디 입력 확인', '아이디가 입력되지 않았습니다.');
    } else if (pw.trim() === '') {
      alert('비밀번호 입력 확인', '비밀번호가 입력되지 않았습니다.');
    } else {
      try {
        const res = await axios.post(`${apiURL}/users/login`, {
          email,
          pw,
        });

        console.log('답장 확인', res);
        if (res.data !== null && res.data !== '') {
          console.log('로그인 성공');

          // 로그인 성공 후 토큰 저장
          const token = res.data;
          localStorage.setItem('token', token);
          console.log('토큰 저장 성공', token);
          navigate('/home');
        } else {
          alert('로그인 실패');
        }
      } catch (error) {
        console.log('토큰 저장 실패', error);
        alert('존재하지 않는 회원입니다.');
      }
    }
  }

  useEffect(() => {
    console.log(email, pw);
  });

  return (
    <SignInWrapper>
      <Title>끄적끄적</Title>
      <Form>
        <InputBox>
          <Label>아이디</Label>
          <InputStyleBox yes>
            <Input
              className="input"
              type="text"
              placeholder="아이디를 입력하세요"
              onChange={e => setEmail(e.target.value)}
            />
            <InputLine />
          </InputStyleBox>
        </InputBox>
        <InputBox>
          <Label>비밀번호</Label>
          <InputStyleBox>
            <Input
              className="input"
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={e => setPw(e.target.value)}
            />
            <InputLine />
          </InputStyleBox>
        </InputBox>
      </Form>
      <LoginBtn
        onClick={() => {
          login();
        }}
      >
        로그인
      </LoginBtn>
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
};

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
