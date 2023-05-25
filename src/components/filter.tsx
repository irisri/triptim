import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { FilterIcon } from '../assets/filterIcon';
import { CityPicker } from './cityPicker';
import { DatePickerText } from './datePickerText';
import moment from 'moment';

const RootFilter = styled.div`
  padding: 12px 0 12px 16px;
  display: flex;
  flex-direction: row;
  border-color: #f2f2f2;
  border-width: 1px 0px;
  border-style: solid;
  gap: 12px;
  overflow: hidden;
`;

const FilterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

const CalendarContainer = styled(DialogContent)`
  width: 350px;
  max-width: 100%;
  background: #fff;
  color: #222;
  border-radius: 8px;
  line-height: 1.125em;
  button {
    margin: 0;
    border: 0;
    outline: none;
    &:enabled:hover {
      cursor: pointer;
    }
  }
  .react-calendar__month-view__days__day--weekend {
    color: #6f48eb;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #646269;
    border-radius: 6px;
    font-weight: bold;
    color: #fff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--hasActive {
    background: #6f48eb;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: #6f48eb;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #6f48eb;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }

  .react-calendar__tile--range {
    background: #bfb3e8;
    color: #6f48eb;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #6f48eb;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #6f48eb;
    color: white;
  }
`;

export const Filter = () => {
  const [city, setCity] = useState('');
  const [openDatePicket, setOpenDatePicket] = useState(false);
  const [date, setDate] = useState<any>(new Date());

  const renderText = useMemo(() => {
    if (date[0] === date[1]) return 'Pick a date';
    return `${moment(date[0]).format('DD')}-${moment(date[0]).format('DD MMM YYYY')}`;
  }, [date]);

  return (
    <>
      <RootFilter>
        <FilterIcon />
        <FilterItems>
          <CityPicker city={city} setCity={setCity} />
          <DatePickerText text={renderText} setOpenDatePicket={setOpenDatePicket} />
        </FilterItems>
      </RootFilter>

      <Dialog onClose={() => setOpenDatePicket(false)} open={openDatePicket}>
        <CalendarContainer>
          <Calendar selectRange={true} onChange={(value) => setDate(value)} value={date} />
        </CalendarContainer>
      </Dialog>
    </>
  );
};
