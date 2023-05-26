import React from 'react';
import styled from '@emotion/styled';

import addProfileImg from '../assets/addProfileImg.svg';
import { HeasrtIcon } from '../assets/heasrtIcon';
import { MessageIcon } from '../assets/messageIcon';

const ActionsMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActionMenuDiv = styled.div`
  margin-bottom: 9px;
`;

const Padding = styled.div`
  padding: 10px 7px;
  display: flex;
`;

const Img = styled.img`
  width: 40px;
`;

const ActionMenuText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  margin-top: 3px;
  text-align: center;
`;

export const ActionMenuCarousel = () => {
  return (
    <ActionsMenuDiv>
      <ActionMenuDiv>
        <Img src={addProfileImg} alt='add profile' />
        <ActionMenuText>ADD</ActionMenuText>
      </ActionMenuDiv>

      <ActionMenuDiv>
        <Padding>
          <HeasrtIcon color='#fff' />
        </Padding>
        <ActionMenuText>SAVE</ActionMenuText>
      </ActionMenuDiv>

      <ActionMenuDiv>
        <Padding>
          <MessageIcon color='#fff' />
        </Padding>
        <ActionMenuText>CHAT</ActionMenuText>
      </ActionMenuDiv>
    </ActionsMenuDiv>
  );
};
