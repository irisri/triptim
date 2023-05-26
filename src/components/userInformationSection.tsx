import React from 'react';
import styled from '@emotion/styled';

import { TagText } from '../components/styledComponent/tagText.styled';
import { EventTag } from '../components/styledComponent/eventTag.styled';

import verified from '../assets/verified.svg';
import menu from '../assets/menu.svg';
import friends from '../assets/friends.svg';

const Container = styled.div`
  padding: 0px 16px;
  border-bottom: 1px solid #dadada;
`;

const RootUserInformationDiv = styled.div`
  margin-top: 74px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 6px 12px 0px;
`;

const UserInformationHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  color: #282a35;
`;

const AgeTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  color: #282a35;
`;

const VerifiedDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: #3d87f7;
  font-weight: 400;
  font-size: 16px;
`;

const TagsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const TagDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const P = styled.p`
  color: #dadada;
  padding-left: 8px;
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

const tagData = [
  {
    text: 'Lives in Israel',
    iconName: 'israel',
  },
  {
    text: 'From Germany',
    iconName: 'germany',
  },
  {
    text: 'Developer at Google',
    iconName: 'work',
  },
  {
    text: 'English, German, Hebrew',
    iconName: 'language',
  },
];

const eventTagData = ['Burning Man', 'Broadway', 'Loolapalooza'];

export const UserInformationSection = () => {
  return (
    <>
      <Container>
        <RootUserInformationDiv>
          <UserInformationHeaderDiv>
            <Title>Anna Winter</Title>
            <AgeTitle>31</AgeTitle>
            <VerifiedDiv>
              <img src={verified} alt='Verified' />
              <p>Verified</p>
            </VerifiedDiv>
          </UserInformationHeaderDiv>
          <img src={menu} alt='menu' />
        </RootUserInformationDiv>
        <TagsDiv>
          {tagData.map((tag, index) => {
            console.log(tagData.length, index);
            return (
              <TagDiv key={tag.text}>
                <TagText text={tag.text} />
                {tagData.length !== index + 1 ? <P>|</P> : null}
              </TagDiv>
            );
          })}
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
