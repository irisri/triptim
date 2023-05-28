import React from 'react';
import styled from '@emotion/styled';

import { TagDataProps } from '../utils/date';
import { TagText } from '../components/styledComponent/tagText.styled';

import more from '../assets/more.svg';

interface DataTagProps {
  tag: TagDataProps;
  isLast: boolean;
  isProfile: boolean;
}

const TagDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const P = styled.p`
  color: #dadada;
  padding-left: 4px;
`;

const Img = styled.img`
  padding: 3.5px 0px;
`;

export const DataTag = ({ tag, isProfile, isLast }: DataTagProps) => {
  return (
    <TagDiv key={tag.text ?? tag.iconName}>
      <TagText
        text={tag.text ?? ''}
        icon={tag.iconName === 'more' ? <Img src={more} alt='show more' /> : tag.iconName}
        isProfile={isProfile}
      />
      {isProfile && !isLast ? <P>|</P> : null}
    </TagDiv>
  );
};
