import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  color: #54565e;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding: 4.5px 3px;
`;

export const TagText = ({ text }: { text: string }) => {
  return <P>{text}</P>;
};
