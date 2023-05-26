import React from 'react';
import styled from '@emotion/styled';

interface TagTextProps {
  text: string;
  isProfile?: boolean;
}

interface StylePropd {
  isProfile: boolean;
}

const P = styled.p`
  color: ${(props: StylePropd) => (props.isProfile ? '#54565e' : '#fff')};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding: ${(props: StylePropd) => (props.isProfile ? '4.5px 3px' : '8px 12px')};
  background: rgba(255, 255, 255, 0.3);
  border: ${(props: StylePropd) => (props.isProfile ? 'none' : '1px solid #FFFFFF')};
  border-radius: 34px;
`;

export const TagText = ({ text, isProfile = true }: TagTextProps) => {
  return <P isProfile={isProfile}>{text}</P>;
};
