import React from 'react';
import styled from '@emotion/styled';

import arrow from '../../assets/arrow.svg';

export interface FiletrButtonProps {
  text: string;
  icon?: boolean;
  onClick?: () => void;
}

const Button = styled.button`
  font-family: 'Poppins';
  padding: 6px 8px;
  font-weight: 400;
  font-size: 14px;
  background-color: #7b33d7;
  color: #ffffff;
  border-radius: 34px;
  border: none;
  outline: none;
  cursor: pointer;
  max-width: 179px;
  height: 34px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const FiletrButton = ({ text, icon, onClick }: FiletrButtonProps) => {
  return (
    <Button onClick={onClick}>
      <Div>
        {text}
        {icon ? <img src={arrow} alt='arrow' /> : null}
      </Div>
    </Button>
  );
};
