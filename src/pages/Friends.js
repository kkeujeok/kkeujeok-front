import styled from 'styled-components';
import { ReactComponent as Paper } from '../imgs/Paper.svg';

const Friends = () => (
  <Wrapper>
    <LeftBox>
      <PaperBox>
        <ContentBox>
          <Title>친구 검색 </Title>
          <SearchBox>
            <SearchInput placeholder="이메일을 검색하세요" />
            <SearchBtn>검색 </SearchBtn>
          </SearchBox>
          <List>
            <p>이유라</p>
            <FriendBtn>친구 신청</FriendBtn>
          </List>
        </ContentBox>
      </PaperBox>
    </LeftBox>
    <RightBox>
      <PaperBox right>
        <ContentBox right>
          <Title>친구 관리</Title>
          <List>
            <FriendName>이유라</FriendName>
            <BtnBox>
              <FriendBtn>방문</FriendBtn>
              <FriendBtn>삭제</FriendBtn>
            </BtnBox>
          </List>
        </ContentBox>
      </PaperBox>
    </RightBox>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div`
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

const RightBox = styled.div`
  width: 36%;
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

const PaperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => (props.right ? '450px' : '542px')};
  height: 655px;

  gap: 54px 110px;
  flex-wrap: wrap;
  border-radius: 30px;
  background: #eedde1;

  /* border: 10px dashed red; 테두리 스타일 및 색상 설정 */
  /* box-shadow: 0 0 0 10px #4872f4 dashed inset; */
`;

const ContentBox = styled.div`
  width: ${props => (props.right ? '430px' : '518px')};
  height: 626px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 26px;
  border: 1px dashed #000;

  background: #eedde1;
`;

const List = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 26px;
`;

// 검색
const SearchBox = styled.div`
  width: 360px;
  height: 71px;
  border-radius: 30px;
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 60%;
  font-size: 14px;
  margin-left: 30px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.p`
  font-size: 16px;
  font-weight: 700;

  margin-right: 27px;
`;

const ResultBox = styled.div`
  width: 312px;
`;
const Title = styled.p`
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// 친구

const FriendName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const BtnBox = styled.div`
  width: 160px;
`;

const FriendBtn = styled.button`
  width: 69px;
  height: 43px;
  border-radius: 10px;
  background: #724dbc;
  border: none;
  color: #fff;
  margin: 5px;
`;

export default Friends;
