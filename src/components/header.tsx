import React from 'react';
import styled from '@emotion/styled';

import logo from '../assets/logo.svg';
import settings from '../assets/settings.svg';
import notifications from '../assets/notifications.svg';

const RootHeader = styled.div`
  padding: 8px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 28px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = () => {
  return (
    <RootHeader>
      <Img src={logo} alt='triptim logo' />
      <Icons>
        <img src={notifications} alt='notifications' />
        <img src={settings} alt='settings' />
      </Icons>
    </RootHeader>
  );
};
