import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropDown = () => {
  const onLogOut = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
  };
  return (
    <MenuWrapper>
      <Title to="/friends">친구 관리</Title>
      <Title to="/rank">랭킹</Title>
      <Title to="/" onClick={onLogOut}>
        로그아웃
      </Title>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  width: 200px;
  height: 150px;

  border-radius: 20px;
  background: rgba(255, 251, 229, 0.8);

  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const Title = styled(Link)`
  color: #000;

  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  padding: 10px;
`;
export default DropDown;
