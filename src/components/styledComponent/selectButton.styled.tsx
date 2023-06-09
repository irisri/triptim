import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

import arrow from '../../assets/arrow.svg';

const SelectStyled = styled(Select)`
  font-family: 'Poppins';
  margin: 0;
  border: none;
  font-weight: 400;
  font-size: 14px;
  background-color: #7b33d7;
  color: #ffffff;
  border-radius: 34px;
  & .MuiSelect-select {
    padding: 6px 32px 6px 24px;
    border: 0;
    justify-content: center;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  & .MuiSelect-icon {
    top: 6px;
  }
`;

const Img = styled.img`
  cursor: pointer;
`;

interface SelectButtonPrps {
  value: string;
  onChange: (value: string) => void;
}

export const SelectButton = ({ value, onChange }: SelectButtonPrps) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    onChange(event.target.value as string);
  };

  return (
    <SelectStyled
      displayEmpty
      value={value}
      onChange={(event: SelectChangeEvent<unknown>, child: ReactNode) => handleChange(event)}
      IconComponent={(props) => <Img src={arrow} {...props} alt='open' />}
    >
      <MenuItem value={''}>Pick a city</MenuItem>
      <MenuItem value={'Barcelona'}>Barcelona, Spain</MenuItem>
    </SelectStyled>
  );
};
