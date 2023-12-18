/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import { ReactComponent as Satellite } from '../../imgs/Satellite.svg';
import { useParams, Link } from 'react-router-dom';
import Character from '../../components/Character';
import Board from '../../components/Board';
import React, { useState, useEffect, useContext } from 'react';

const Home = () => {
  const { id } = useParams();

  return (
    <HomeWrapper>
      <Board />
      <SatelliteIcon />
      {/* <p>현재 페이지 파라미터 {id} 입니다. </p> */}
      <Character />
    </HomeWrapper>
  );
};
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
