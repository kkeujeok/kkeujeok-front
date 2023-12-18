/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import { ReactComponent as Satellite } from '../../imgs/Satellite.svg';
import Character from '../../components/Character';
import Board from '../../components/Board';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => (
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
