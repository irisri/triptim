import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  border: 1px solid #b7b8bd;
  border-radius: 22px;
  color: #b7b8bd;
  padding: 6.5px 20px;
  width: fit-content;
`;

export const EventTag = ({ text }: { text: string }) => {
  return <P>{text}</P>;
};
