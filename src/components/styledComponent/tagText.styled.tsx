import React from 'react';
import styled from '@emotion/styled';

interface TagTextProps {
  text: string;
  icon?: string;
  isProfile?: boolean;
}

interface StylePropd {
  isProfile: boolean;
}

const Div = styled.div`
  color: ${(props: StylePropd) => (props.isProfile ? '#54565e' : '#fff')};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  gap: 8px;
  display: flex;
  font-size: 14px;
  padding: ${(props: StylePropd) => (props.isProfile ? '4.5px 3px' : '8px 12px')};
  background: rgba(255, 255, 255, 0.3);
  border: ${(props: StylePropd) => (props.isProfile ? 'none' : '1px solid #FFFFFF')};
  border-radius: 34px;
`;

export const TagText = ({ icon, text, isProfile = true }: TagTextProps) => {
  return (
    <Div isProfile={isProfile}>
      {icon ? <p>{icon}</p> : null}
      <p>{text}</p>
    </Div>
  );
};
