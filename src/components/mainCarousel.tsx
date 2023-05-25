import React from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from '@emotion/styled';

import { CarouselItem } from './carouselItem';

const Indicator = styled.div`
  width: 57px;
  height: 4px;
  background: #ffffff;
  border-radius: 13px;
`;

export const MainCarousel = ({ isUserProfile = false }: { isUserProfile?: boolean }) => {
  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysInvisible={true}
      navButtonsAlwaysVisible={false}
      swipe={true}
      animation='fade'
      cycleNavigation={false}
      indicatorContainerProps={{ style: { margin: 0, position: 'absolute', top: 0, zIndex: 5 } }}
      indicatorIconButtonProps={{
        style: {
          margin: 0,
          padding: '10px',
          opacity: 0.4,
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          opacity: 1,
        },
      }}
      IndicatorIcon={<Indicator />}
      duration={500}
      next={(now?: number, previous?: number) => {
        console.log(now, previous);
      }}
    >
      {Array.from(Array(4).keys()).map((index) => {
        return (
          <CarouselItem index={index} key={isUserProfile ? `${index}-${index}` : index} isUserProfile={isUserProfile} />
        );
      })}
    </Carousel>
  );
};
