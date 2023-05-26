import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { tagData } from '../utils/date';

import { UserInformationHeader } from './userInformationHeader';
import { DataTag } from './dateTag';
import { HeasrtIcon } from '../assets/heasrtIcon';
import { MessageIcon } from '../assets/messageIcon';

import arrow from '../assets/arrow.svg';
import addProfileImg from '../assets/addProfileImg.svg';
import pic0 from '../assets/pic0.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

interface StylePropsRootCarouse {
  imgSrc: string;
  isUserProfile: boolean;
}

const RootCarouselItem = styled.div`
  height: 700px;
  width: 430px;
  display: flex;
  justify-content: center;
  background-image: url(${(props: StylePropsRootCarouse) => props.imgSrc});
  border-bottom-left-radius: ${(props: StylePropsRootCarouse) => (props.isUserProfile ? '60px 60px' : 0)};
  border-bottom-right-radius: ${(props: StylePropsRootCarouse) => (props.isUserProfile ? '60px 60px' : 0)};
`;

const CarouselInformation = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0 20px;
`;

const UserInformationRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 89px;
`;

const TagsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 48px;
`;

const ActionsMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActionMenuDiv = styled.div`
  margin-bottom: 9px;
`;

const Padding = styled.div`
  padding: 10px 7px;
  display: flex;
`;

const Img = styled.img`
  width: 40px;
`;

const ActionMenuText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  margin-top: 3px;
  text-align: center;
`;

const Footerdiv = styled.div`
  width: 390px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const FotterButton = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: none;
  background-color: transparent;
  color: white;
  margin-bottom: 8px;
  padding: 8px 10px;
  cursor: pointer;
`;

interface CarouselItemProps {
  index: number;
  isUserProfile: boolean;
}

export const CarouselItem = ({ index, isUserProfile }: CarouselItemProps) => {
  let navigate = useNavigate();

  const imgList = [pic0, pic1, pic2, pic3];

  return (
    <RootCarouselItem imgSrc={imgList[index]} isUserProfile={isUserProfile}>
      {!isUserProfile ? (
        <CarouselInformation>
          <UserInformationRoot>
            <div>
              <UserInformationHeader userAge={31} userName={'Anna Winter'} />
              <TagsDiv>
                {tagData.map((tag, index) => (
                  <DataTag tag={tag} key={tag.text} isLast={tagData.length - 1 === index} isProfile={false} />
                ))}
              </TagsDiv>
            </div>

            <div>
              <ActionsMenuDiv>
                <ActionMenuDiv>
                  <Img src={addProfileImg} alt='add profile' />
                  <ActionMenuText>ADD</ActionMenuText>
                </ActionMenuDiv>

                <ActionMenuDiv>
                  <Padding>
                    <HeasrtIcon color='#fff' />
                  </Padding>
                  <ActionMenuText>SAVE</ActionMenuText>
                </ActionMenuDiv>

                <ActionMenuDiv>
                  <Padding>
                    <MessageIcon color='#fff' />
                  </Padding>
                  <ActionMenuText>CHAT</ActionMenuText>
                </ActionMenuDiv>
              </ActionsMenuDiv>
            </div>
          </UserInformationRoot>

          <Footerdiv>
            <FotterButton onClick={() => navigate(`/user/${1}`)}>
              See profile <img src={arrow} alt='open' />
            </FotterButton>
          </Footerdiv>
        </CarouselInformation>
      ) : null}
    </RootCarouselItem>
  );
};
