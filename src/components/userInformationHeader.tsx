import React from 'react';
import styled from '@emotion/styled';

import verified from '../assets/verified.svg';
import menu from '../assets/menu.svg';

interface StyleProps {
  isProfile: boolean;
}

interface UserInformationHeaderProps {
  userName: string;
  userAge: number;
  isProfile?: boolean;
}

const RootUserInformationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInformationHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  color: ${(props: StyleProps) => (props.isProfile ? '#282a35' : '#fff')};
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
`;

const AgeTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
`;

const VerifiedDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: #3d87f7;
  font-weight: 400;
  font-size: 16px;
`;

export const UserInformationHeader = ({ userAge, userName, isProfile = false }: UserInformationHeaderProps) => {
  return (
    <RootUserInformationDiv>
      <UserInformationHeaderDiv isProfile={isProfile}>
        <Title>{userName}</Title>
        <AgeTitle>{userAge}</AgeTitle>
        <VerifiedDiv>
          <img src={verified} alt='Verified' />
          {isProfile ? <p>Verified</p> : null}
        </VerifiedDiv>
      </UserInformationHeaderDiv>
      {isProfile ? <img src={menu} alt='menu' /> : null}
    </RootUserInformationDiv>
  );
};
