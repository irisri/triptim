import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { tagData, travalTagData, TagDataProps } from '../utils/date';

import { UserInformationHeader } from './userInformationHeader';
import { ActionMenuCarousel } from './actionMenuCarousel';
import { Travalformation } from './travalInformatio';
import { DataTag } from './dateTag';

import arrow from '../assets/arrow.svg';
import back from '../assets/back.svg';
import pic0 from '../assets/pic0.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

const enum ViewProfile {
  Profile = 'profile',
  Travel = 'travel',
}

interface StylePropsRootCarouse {
  imgSrc: string;
  isUserProfile: boolean;
}

const RootCarouselItem = styled.div`
  height: 700px;
  width: 430px;
  display: flex;
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
  justify-content: space-between;
`;

const Info = styled.div`
  max-width: 340px;
`;

const TagsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 48px;
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

const ProfileDiv = styled.div`
  margin-top: 28px;
  margin-left: 19px;
  display: flex;
  align-items: center;
`;

const ToggoleDiv = styled.div`
  background-color: #fff;
  box-shadow: 0px 16px 22px rgba(0, 0, 0, 0.37);
  border-radius: 17.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 3px 2px;
  gap: 9px;
`;

interface StyleProps {
  isPicked: boolean;
}

const BackButton = styled.button`
  height: 29px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0;
  margin-right: 100px;
`;

const ToggleButton = styled.button`
  color: ${(props: StyleProps) => (props.isPicked ? '#fff' : '#878893')};
  background-color: ${(props: StyleProps) => (props.isPicked ? '#7B33D7' : '#fff')};
  border-radius: 17.5px;
  padding: 7px 14px;
  outline: none;
  border: none;
  cursor: pointer;
`;

interface CarouselItemProps {
  index: number;
  isUserProfile: boolean;
}

export const CarouselItem = ({ index, isUserProfile }: CarouselItemProps) => {
  const [pickedView, setPikedView] = useState(ViewProfile.Profile);
  let navigate = useNavigate();

  const imgList = [pic0, pic1, pic2, pic3];

  const travalTags: TagDataProps[] =
    travalTagData.length > 5
      ? [
          ...travalTagData.slice(0, 5),
          {
            iconName: 'more',
          },
        ]
      : travalTagData;

  return (
    <RootCarouselItem imgSrc={imgList[index]} isUserProfile={isUserProfile}>
      {!isUserProfile ? (
        <CarouselInformation>
          <UserInformationRoot>
            <Info>
              <UserInformationHeader userAge={31} userName={'Anna Winter'} />
              {index !== 0 ? (
                <TagsDiv>
                  {tagData.map((tag, index) => (
                    <DataTag tag={tag} key={tag.text} isLast={tagData.length - 1 === index} isProfile={false} />
                  ))}
                </TagsDiv>
              ) : (
                <>
                  <Travalformation />
                  <TagsDiv>
                    {travalTags.map((tag, index) => (
                      <DataTag
                        tag={tag}
                        key={tag.text ?? tag.iconName}
                        isLast={tagData.length - 1 === index}
                        isProfile={false}
                      />
                    ))}
                  </TagsDiv>
                </>
              )}
            </Info>

            <div>
              <ActionMenuCarousel />
            </div>
          </UserInformationRoot>

          <Footerdiv>
            <FotterButton onClick={() => navigate(`/user/${1}`)}>
              See profile <img src={arrow} alt='open' />
            </FotterButton>
          </Footerdiv>
        </CarouselInformation>
      ) : (
        <div>
          <ProfileDiv>
            <BackButton>
              <img src={back} alt='back' />
            </BackButton>

            <ToggoleDiv>
              <ToggleButton
                isPicked={pickedView === ViewProfile.Profile}
                onClick={() => setPikedView(ViewProfile.Profile)}
              >
                Profile
              </ToggleButton>
              <ToggleButton
                isPicked={pickedView === ViewProfile.Travel}
                onClick={() => setPikedView(ViewProfile.Travel)}
              >
                My Travels
              </ToggleButton>
            </ToggoleDiv>
          </ProfileDiv>
        </div>
      )}
    </RootCarouselItem>
  );
};
