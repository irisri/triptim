import React from 'react';
import styled from '@emotion/styled';

import verified from '../assets/verified.svg';
import menu from '../assets/menu.svg';

const RootDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 74px;
  padding: 0px 22px;
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

export const UserInformationSection = () => {
  return (
    <RootDiv>
      <UserInformationHeaderDiv>
        <Title>Anna Winter</Title>
        <AgeTitle>31</AgeTitle>
        <VerifiedDiv>
          <img src={verified} alt='Verified' />
          <p>Verified</p>
        </VerifiedDiv>
      </UserInformationHeaderDiv>
      <img src={menu} alt='menu' />
      <>
      </>
    </RootDiv>
  );
};
