import React from 'react';
import { SelectButton } from './styledComponent/selectButton.styled';

interface CityPickerProps {
  city: string;
  setCity: (value: string) => void;
}

export const CityPicker = ({ city, setCity }: CityPickerProps) => {
  return <SelectButton value={city} onChange={setCity} />;
};
