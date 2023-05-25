import React, { useState } from 'react';
import { SelectButton } from './styledComponent/selectButton.styled';

interface CityPickerProps {
  city: string;
  setCity: (value: string) => void;
}

export const CityPicker = ({ city, setCity }: CityPickerProps) => {
  const [flag, setFlag] = useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      fetch('https://countriesnow.space/api/v0.1/countries/flag/images', {
        method: 'POST',
        body: JSON.stringify({
          iso2: 'ES',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        response.json().then((response) => {
          setFlag(response.data.flag);
        });
      });
    };

    fetchData();
  }, []);

  return <SelectButton flag={flag} value={city} onChange={setCity} />;
};
