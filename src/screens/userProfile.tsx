import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { MainCarousel } from '../components/mainCarousel';
import { IconButton } from '../components/styledComponent/iconButton.styled';
import { UserInformationSection } from '../components/userInformationSection';

import { HeasrtIcon } from '../assets/heasrtIcon';
import { AddProfile } from '../assets/addProfile';
import { MessageIcon } from '../assets/messageIcon';

const RootDiv = styled(Box)`
  max-width: 430px;
  margin: 0 auto;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ProfileIconsDiv = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: -40px;
  position: absolute;
  z-index: 3;
`;

const WhiteSpace = styled.div`
  height: 38px;
`;

export const UserProfile = () => {
  return (
    <RootDiv>
      <WhiteSpace />
      <MainCarousel isUserProfile={true} />

      <ProfileIconsDiv>
        <IconButton icon={<HeasrtIcon color={'#7B33D7'} />} size={50} />
        <IconButton
          icon={<AddProfile backgroundColor={'#7B33D7'} color={'#fff'} />}
          size={80}
          backgroudcolor={'#7B33D7'}
        />
        <IconButton icon={<MessageIcon color={'#7B33D7'} />} size={50} />
      </ProfileIconsDiv>
      <div>
        <UserInformationSection />
      </div>
    </RootDiv>
  );
};
