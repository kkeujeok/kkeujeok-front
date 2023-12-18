import styled from 'styled-components';
import { ReactComponent as Satellite } from '../../imgs/Satellite.svg';
import Character from '../../components/Character';
import Board from '../../components/Board';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => (
  // useEffect(() => {
  //   axios
  //     .get(`${apiURL}/myPage/${userId}`)
  //     .then(response => {
  //       setUserNickName(response.userNickName);
  //       console.log(response.userNickName);

  //       setGender(response.gender);
  //       console.log(response.gender);

  //       setRollingPaperDtos(response.rollingPaperDtos);
  //       console.log(response.rollingPaperDtos);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  <HomeWrapper>
    <Board />
    <SatelliteIcon />
    <Character />
  </HomeWrapper>
);
const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`;

const SatelliteIcon = styled(Satellite)`
  position: absolute;
  width: 230px;
  height: auto;
  top: 25%;
  right: 30%;
`;

export default Home;
