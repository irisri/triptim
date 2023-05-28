import React from 'react';
import styled from '@emotion/styled';

import { flightInformation } from '../utils/date';
import { FlightInformationComponent } from './flightInformation';

import traval from '../assets/traval.svg';

const TravalDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: white;
  margin-top: 18px;
  margin-bottom: 28px;
`;

const Img = styled.img`
  padding-right: 2px;
  border-right: 1px white solid;
`;

const TravaInfolDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const TravaTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
`;

const FlightDiv = styled.div`
  display: flex;
  gap: 8px;
`;

const City = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
`;

export const Travalformation = () => {
  return (
    <TravalDiv>
      <Img src={traval} alt='traval' />
      <TravaInfolDiv>
        <TravaTitle>Upcoming Travel Plan</TravaTitle>
        <FlightDiv>
          <City>Paris, France</City>
          {flightInformation.map((flight) => {
            return <FlightInformationComponent key={flight.date} flight={flight} />;
          })}
        </FlightDiv>
      </TravaInfolDiv>
    </TravalDiv>
  );
};
