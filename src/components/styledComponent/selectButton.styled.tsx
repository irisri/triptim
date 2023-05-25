import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
  & .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  & .MuiSelect-select {
    padding: 6px 32px 6px 24px;
    border: 0;
  }
`;

const Img = styled.img`
  width: 16;
  cursor: 'pointer';
`;

interface SelectButtonPrps {
  value: string;
  flag: string;
  onChange: (value: string) => void;
}

export const SelectButton = ({ value, flag, onChange }: SelectButtonPrps) => {
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
