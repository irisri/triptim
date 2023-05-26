import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import { FlightInformation, Flight } from '../utils/date';

import landing from '../assets/landing.svg';
import departure from '../assets/departure.svg';

interface FlightInformationProps {
  flight: FlightInformation;
}

const FlightInformationDiv = styled.div`
  display: flex;
  gap: 5px;
`;

const FlightInformationText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
`;

export const FlightInformationComponent = ({ flight }: FlightInformationProps) => {
  return (
    <FlightInformationDiv key={flight.date}>
      <img src={flight.icon === Flight.Landing ? landing : departure} alt={flight.icon} />
      <FlightInformationText>{moment(flight.date).format('ddd, MMM DD')}</FlightInformationText>
    </FlightInformationDiv>
  );
};
