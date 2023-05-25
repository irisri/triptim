import React from 'react';

import { FiletrButton } from './styledComponent/filetrButton.styled';

interface DatePickerProps {
  text: string;
  setOpenDatePicket: (value: boolean) => void;
}

export const DatePickerText = ({ text, setOpenDatePicket }: DatePickerProps) => {
  return <FiletrButton text={text} onClick={() => setOpenDatePicket(true)} />;
};
