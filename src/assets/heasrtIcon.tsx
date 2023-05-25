import React from 'react';
import { DEFAULT_COLOR } from '../utils/const';

export const HeasrtIcon = ({ color = DEFAULT_COLOR, width = 28, height = 24 }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14 22.6666C14 22.6666 1.87878 15.8788 1.87878 7.63635C1.87878 6.17924 2.38363 4.76714 3.30742 3.6403C4.2312 2.51346 5.51688 1.74149 6.94569 1.45572C8.3745 1.16996 9.85818 1.38806 11.1443 2.07292C12.4304 2.75778 13.4396 3.86709 14 5.21211C14.5604 3.86709 15.5695 2.75778 16.8557 2.07292C18.1418 1.38806 19.6255 1.16996 21.0543 1.45572C22.4831 1.74149 23.7688 2.51346 24.6926 3.6403C25.6164 4.76714 26.1212 6.17924 26.1212 7.63635C26.1212 15.8788 14 22.6666 14 22.6666Z'
        stroke={color}
        strokeWidth='2.13333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
