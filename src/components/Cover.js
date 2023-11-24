/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import { ReactComponent as Ground } from '../imgs/ground.svg';
import { ReactComponent as ChatIcon } from '../imgs/Chat.svg';
import { ReactComponent as LoveIcon } from '../imgs/Love.svg';
import { ReactComponent as RingIcon } from '../imgs/Ring.svg';
import { ReactComponent as SantaIcon } from '../imgs/Santa.svg';
import { ReactComponent as TopDeco } from '../imgs/topDeco.svg';

const Cover = () => (
  <SignInWrapper>
    <CoverBox>
      <TopDecoBox />
      <ItemBox>
        <Chat />
        <Love />
        <Ring />
      </ItemBox>
    </CoverBox>
    <Circle top />
    <Circle top={false} />
    <Santa />
    <GroundBox />
  </SignInWrapper>
);

const SignInWrapper = styled.div`
  width: 50%;
  background-color: #fff;
`;

const CoverBox = styled.div`
  background: linear-gradient(
      180deg,
      #0c0d41 0%,
      #221c5f 31.16%,
      #352f85 57.51%,
      #40399e 70.05%,
      rgba(124, 79, 197, 0.76) 81.56%,
      rgba(216, 116, 146, 0) 100%
    ),
    linear-gradient(
      180deg,
      #0c0d41 0%,
      #221c5f 36.98%,
      #352f85 67.71%,
      #40399e 79.69%,
      rgba(91, 55, 158, 0.76) 89.58%,
      rgba(84, 61, 151, 0) 100%
    );
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;

const ItemBox = styled.div``;

const GroundBox = styled(Ground)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: auto;
  height: 180px;
  z-index: 110;
`;

const TopDecoBox = styled(TopDeco)`
  width: 100%;
  height: 250px;
  z-index: 100;
  margin-top: 30px;
`;

const Chat = styled(ChatIcon)`
  position: absolute;
  left: 30px;
  bottom: 300px;
  width: 220px;
  height: 220px;

  z-index: 100;
`;

const Love = styled(LoveIcon)`
  width: 180px;
  height: 180px;
  margin: -200px 0 120px 290px;
`;

const Santa = styled(SantaIcon)`
  position: absolute;
  width: 300px;
  height: auto;
  z-index: 130;
  bottom: 140px;
  left: 80px;
`;

const Ring = styled(RingIcon)`
  width: 200px;
  height: 200px;
  margin: 0 0 10px 50px;
`;

const Circle = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;

  bottom: ${props => (props.top ? '0' : '0')};
  left: ${props => (props.top ? '500px' : '50px')};
  right: ${props => (props.top ? '0' : '0')};
  top: ${props => (props.top ? '80px' : '45%')};

  border-radius: 50%;

  // eslint-disable-next-line no-confusing-arrow
  background: ${props =>
    props.top
      ? 'linear-gradient(180deg, #2C2672 0%, rgba(44, 38, 114, 0.00) 100%)'
      : 'linear-gradient(180deg, #2C2672 0%, rgba(108, 38, 114, 0.00) 100%)'};

  z-index: 50;
`;

export default Cover;
