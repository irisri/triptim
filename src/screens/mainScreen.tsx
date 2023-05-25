import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { Header } from '../components/header';
import { Filter } from '../components/filter';
import { MainCarousel } from '../components/mainCarousel';

const RootDiv = styled(Box)`
  max-width: 375px;
  margin: 0 auto;
  height: 100vh;
`;

export const MainScreen = () => {
  return (
    <RootDiv>
      <Header />
      <Filter />
      <MainCarousel />
    </RootDiv>
  );
};
