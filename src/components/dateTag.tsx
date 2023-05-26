import React from 'react';
import styled from '@emotion/styled';

import { TagDataProps } from '../utils/date';

import { TagText } from '../components/styledComponent/tagText.styled';

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
  padding-left: 8px;
`;

export const DataTag = ({ tag, isProfile, isLast }: DataTagProps) => {
  return (
    <TagDiv key={tag.text}>
      <TagText text={tag.text} isProfile={isProfile} />
      {isProfile && !isLast ? <P>|</P> : null}
    </TagDiv>
  );
};
