import React from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from '@emotion/styled';

const Img = styled.img`
  height: 700px;
`;

const Indicator = styled.div`
  width: 57px;
  height: 4px;
  background: #ffffff;
  border-radius: 13px;
`;

export const MainCarousel = () => {
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
          <div key={index}>
            <Img src={require(`../assets/pic${index}.png`)} alt={'user'} />
          </div>
        );
      })}
    </Carousel>
  );
};
