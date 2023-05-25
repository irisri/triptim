import React from 'react';
import styled from '@emotion/styled';

import arrow from '../assets/arrow.svg';

import pic0 from '../assets/pic0.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

interface StyleProps {
  imgSrc: string;
}

const RootCarouselItem = styled.div`
  height: 700px;
  width: 430px;
  display: flex;
  justify-content: center;
  background-image: url(${(props: StyleProps) => props.imgSrc});
`;

const CarouselFooter = styled.div`
  width: 390px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  height: fit-content;
  position: absolute;
  bottom: 0;
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
`;

interface CarouselItemProps {
  index: number;
  imgSrc: string;
}

export const CarouselItem = ({ index }: CarouselItemProps) => {
  const imgList = [pic0, pic1, pic2, pic3];
  return (
    <RootCarouselItem imgSrc={imgList[index]}>
      <CarouselFooter>
        <FotterButton>
          See profile <img src={arrow} alt='open' />
        </FotterButton>
      </CarouselFooter>
    </RootCarouselItem>
  );
};