import styled from 'styled-components';
import RollingPaper from './RollingPaper';
import { ReactComponent as Ground } from '../imgs/ground.svg';

const Board = () => (
  <Wrapper>
    <PaperBox>
      <RollingPaper />
      <RollingPaper />
      <RollingPaper />
      <RollingPaper />
      <RollingPaper />
      <RollingPaper />
      <GroundBox />
    </PaperBox>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 60%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    180deg,
    #0c0d41 0%,
    #221c5f 31.16%,
    #352f85 57.51%,
    #40399e 70.05%,
    rgba(124, 79, 197, 0.76) 81.56%,
    rgba(216, 116, 146, 0) 100%
  );
`;

const GroundBox = styled(Ground)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: auto;
  height: 180px;
  z-index: 0;
`;

const PaperBox = styled.div`
  display: flex;
  width: 510px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 54px 110px;
  flex-wrap: wrap;
`;

export default Board;
