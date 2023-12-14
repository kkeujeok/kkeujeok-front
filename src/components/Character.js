import styled from 'styled-components';
import { useState } from 'react';
import Dropdown from './DropDown';
import { ReactComponent as PlanetSeat } from '../imgs/PlanetSeat.svg';
import { ReactComponent as Lucky } from '../imgs/Lucky.svg';
import { ReactComponent as Space } from '../imgs/SpaceBackground.svg';
import { ReactComponent as Girl } from '../imgs/Girl.svg';
import { ReactComponent as Star } from '../imgs/StarY.svg';
import Modal from './modal/ConfirmModal';

const Character = () => {
  // 드롭다운 메뉴바
  const [dropdown, setDropdow] = useState(false);
  const [isModalOpend, setIsModalOpend] = useState(false);

  const modalView = () => {
    setIsModalOpend(prevState => !prevState);
    if (!isModalOpend) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  return (
    <Wrapper>
      <MenuBtn
        onMouseEnter={() => {
          setDropdow(!dropdown);
        }}
      >
        메뉴
        {dropdown && <Dropdown />}
      </MenuBtn>
      <Background />
      <BackStar />
      <CharacterBox>
        <CharacterIcon />
        <PlanetSeatIcon />
        <LuckyBox>
          <LuckIcon />
          <LuckScore>777점</LuckScore>
        </LuckyBox>
      </CharacterBox>
      <HomeTitle>유라의 2023</HomeTitle>
      <DelAccount onClick={modalView}>계정삭제</DelAccount>
      {isModalOpend && (
        <Modal
          modalClose={modalView}
          title="계정 삭제 "
          dialog="정말 삭제하시겠습니까? 한 번 삭제한 계정은 복구할 수 없습니다."
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 35%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #0c0d41 0%,
    #221c5f 31.16%,
    #352f85 57.51%,
    #40399e 70.05%,
    rgba(124, 79, 197, 0.76) 81.56%,
    rgba(216, 116, 146, 0) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: end;
`;

const MenuBtn = styled.p`
  width: 100px;
  margin-top: 39px;
  color: #ffff;
  font-size: 20px;
`;

const CharacterBox = styled.div``;

const PlanetSeatIcon = styled(PlanetSeat)`
  width: 350px;
  height: auto;
  margin-top: 60px;
  margin-right: 120px;
`;

const LuckyBox = styled.div`
  position: absolute;
  right: 100px;
  top: 420px;
`;

const LuckIcon = styled(Lucky)`
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

const LuckScore = styled.p`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-top: 0;
`;

const HomeTitle = styled.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  margin: 50px auto 0 auto;
`;

const DelAccount = styled.p`
  margin: 70px 20px 0 0;
`;

const Background = styled(Space)`
  width: 150px;
  height: auto;
`;

const CharacterIcon = styled(Girl)`
  position: absolute;
  width: 100px;
  height: 200px;
  right: 200px;
  bottom: 340px;
`;

const BackStar = styled(Star)`
  position: absolute;
  right: 350px;
  top: 100px;

  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

export default Character;
