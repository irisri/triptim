import React from 'react';
import styled from '@emotion/styled';

export interface IconButtonProps {
  icon: JSX.Element;
  size: number;
  backgroudcolor?: string;
  color?: string;
}

interface StyleProps {
  size: number;
  backgroudcolor: string;
  color: string;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: StyleProps) => props.color};
  background-color: ${(props: StyleProps) => props.backgroudcolor};
  border: none;
  box-shadow: 0px 4px 8px rgba(17, 12, 44, 0.07);
  border-radius: 42px;
  height: ${(props: StyleProps) => props.size}px;
  width: ${(props: StyleProps) => props.size}px;
`;

export const IconButton = ({ size, icon, backgroudcolor = '#ffffff', color = '#7B33D7' }: IconButtonProps) => {
  return (
    <Button size={size} backgroudcolor={backgroudcolor} color={color}>
      {icon}
    </Button>
  );
};
