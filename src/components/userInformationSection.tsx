import React from 'react';
import styled from '@emotion/styled';

import { tagData, eventTagData } from '../utils/date';

import { UserInformationHeader } from './userInformationHeader';
import { DataTag } from './dateTag';
import { EventTag } from '../components/styledComponent/eventTag.styled';

import friends from '../assets/friends.svg';

const Container = styled.div`
  padding: 0px 16px;
  border-bottom: 1px solid #dadada;
`;

const RootUserInformationDiv = styled.div`
  margin-top: 74px;
  padding: 0px 6px 12px 0px;
`;

const TagsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const FriendsDiv = styled.div`
  background-color: #f9f6f6;
  font-weight: 400;
  font-size: 14px;
  color: #878893;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  width: inherit;
  padding: 6.5px;
  justify-content: center;
  margin-bottom: 16px;
`;

const AboutDiv = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InformationTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #7b33d7;
  padding: 8px 0;
`;

const AboutText = styled.p`
  color: #878893;
  font-weight: 400;
  font-size: 16px;
  padding: 8px 0;
`;

const EventTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const UserInformationSection = () => {
  return (
    <>
      <Container>
        <RootUserInformationDiv>
          <UserInformationHeader userAge={31} userName={'Anna Winter'} isProfile={true} />
        </RootUserInformationDiv>
        <TagsDiv>
          {tagData.map((tag, index) => (
            <DataTag tag={tag} key={tag.iconName} isLast={tagData.length - 1 === index} isProfile={true} />
          ))}
        </TagsDiv>
        <FriendsDiv>
          <img src={friends} alt='friends' />
          <p>113 Friends</p>
        </FriendsDiv>
      </Container>

      <Container>
        <AboutDiv>
          <div>
            <InformationTitle>About Me</InformationTitle>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </AboutText>
          </div>
          <EventTags>
            <InformationTitle>What world event I would like to attend? </InformationTitle>
            {eventTagData.map((eventTag) => (
              <EventTag key={eventTag} text={eventTag} />
            ))}
          </EventTags>
        </AboutDiv>
      </Container>
    </>
  );
};
