import React from 'react';
import { DEFAULT_COLOR, DEFAULT_BACKGROUND_COLOR } from '../utils/const';

export const AddProfile = ({ color = DEFAULT_COLOR, size = 40, backgroundColor = DEFAULT_BACKGROUND_COLOR }) => {
  return (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.2829 35.5861H3.37613C3.27753 35.5861 3.18265 35.5451 3.11381 35.4763C3.04311 35.4056 3.00404 35.3126 3.00404 35.214C3.00404 35.2121 3.00404 32.5163 3.00404 32.5163C3.00404 30.9703 4.10729 29.6085 5.80773 28.4513C8.84398 26.3787 13.7574 25.0727 19.2829 25.0727C20.0532 25.0727 20.6783 24.4476 20.6783 23.6774C20.6783 22.909 20.0532 22.282 19.2829 22.282C13.1025 22.282 7.63097 23.8281 4.2338 26.1443C1.6422 27.9117 0.213379 30.1573 0.213379 32.5145V35.214C0.213379 36.0512 0.546398 36.8568 1.13988 37.4502C1.73336 38.0419 2.53707 38.3767 3.37613 38.3749C6.12773 38.3767 19.2829 38.3767 19.2829 38.3767C20.0532 38.3749 20.6783 37.7498 20.6783 36.9795C20.6783 36.2112 20.0532 35.5842 19.2829 35.5861Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.2825 0.213562C13.6342 0.213562 9.05005 4.7977 9.05005 10.446C9.05005 16.0943 13.6342 20.6784 19.2825 20.6784C24.9308 20.6784 29.5149 16.0943 29.5149 10.446C29.5149 4.7977 24.9308 0.213562 19.2825 0.213562ZM19.2825 3.00423C23.3903 3.00423 26.7243 6.33814 26.7243 10.446C26.7243 14.5539 23.3903 17.8878 19.2825 17.8878C15.1746 17.8878 11.8407 14.5539 11.8407 10.446C11.8407 6.33814 15.1746 3.00423 19.2825 3.00423Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M27.6432 27.6431V23.9078C27.6458 22.3625 28.9006 21.1077 30.4459 21.1051C31.9912 21.1077 33.246 22.3625 33.2486 23.9078V27.6431H36.9839C38.5292 27.6457 39.7839 28.9004 39.7866 30.4458C39.7839 31.9911 38.5292 33.2459 36.9839 33.2485H33.2486V36.9837C33.246 38.5291 31.9912 39.7838 30.4459 39.7865C28.9006 39.7838 27.6458 38.5291 27.6432 36.9837V33.2485H23.908C22.3626 33.2459 21.1079 31.9911 21.1052 30.4458C21.1079 28.9004 22.3626 27.6457 23.908 27.6431H27.6432Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M27.6432 27.6431V23.9078C27.6458 22.3625 28.9006 21.1077 30.4459 21.1051C31.9912 21.1077 33.246 22.3625 33.2486 23.9078V27.6431H36.9839C38.5292 27.6457 39.7839 28.9004 39.7866 30.4458C39.7839 31.9911 38.5292 33.2459 36.9839 33.2485H33.2486V36.9837C33.246 38.5291 31.9912 39.7838 30.4459 39.7865C28.9006 39.7838 27.6458 38.5291 27.6432 36.9837V33.2485H23.908C22.3626 33.2459 21.1079 31.9911 21.1052 30.4458C21.1079 28.9004 22.3626 27.6457 23.908 27.6431H27.6432Z'
        fill={color}
      />
      <path
        d='M27.6432 23.9078L26.2432 23.9054V23.9078H27.6432ZM27.6432 27.6431V29.0431H29.0432V27.6431H27.6432ZM30.4459 21.1051L30.4483 19.7051L30.4435 19.7051L30.4459 21.1051ZM33.2486 23.9078H34.6486L34.6486 23.9054L33.2486 23.9078ZM33.2486 27.6431H31.8486V29.0431H33.2486V27.6431ZM36.9839 27.6431L36.9862 26.2431H36.9839V27.6431ZM39.7866 30.4458L41.1866 30.4482L41.1866 30.4434L39.7866 30.4458ZM36.9839 33.2485V34.6485L36.9862 34.6485L36.9839 33.2485ZM33.2486 33.2485V31.8485H31.8486V33.2485H33.2486ZM33.2486 36.9837L34.6486 36.9861V36.9837H33.2486ZM30.4459 39.7865L30.4435 41.1865L30.4483 41.1865L30.4459 39.7865ZM27.6432 36.9837H26.2432L26.2432 36.9861L27.6432 36.9837ZM27.6432 33.2485H29.0432V31.8485H27.6432V33.2485ZM23.908 33.2485L23.9056 34.6485H23.908V33.2485ZM21.1052 30.4458L19.7052 30.4434L19.7052 30.4482L21.1052 30.4458ZM23.908 27.6431V26.243L23.9056 26.2431L23.908 27.6431ZM26.2432 23.9078V27.6431H29.0432V23.9078H26.2432ZM30.4435 19.7051C28.1268 19.7091 26.2471 21.5888 26.2432 23.9054L29.0432 23.9102C29.0445 23.1362 29.6743 22.5064 30.4483 22.5051L30.4435 19.7051ZM34.6486 23.9054C34.6447 21.5888 32.765 19.7091 30.4483 19.7051L30.4435 22.5051C31.2175 22.5064 31.8473 23.1362 31.8486 23.9102L34.6486 23.9054ZM34.6486 27.6431V23.9078H31.8486V27.6431H34.6486ZM36.9839 26.2431H33.2486V29.0431H36.9839V26.2431ZM41.1866 30.4434C41.1826 28.1267 39.3029 26.247 36.9862 26.2431L36.9815 29.043C37.7555 29.0444 38.3853 29.6742 38.3866 30.4482L41.1866 30.4434ZM36.9862 34.6485C39.3029 34.6445 41.1826 32.7648 41.1866 30.4482L38.3866 30.4434C38.3853 31.2174 37.7555 31.8472 36.9815 31.8485L36.9862 34.6485ZM33.2486 34.6485H36.9839V31.8485H33.2486V34.6485ZM34.6486 36.9837V33.2485H31.8486V36.9837H34.6486ZM30.4483 41.1865C32.765 41.1825 34.6447 39.3028 34.6486 36.9861L31.8486 36.9813C31.8473 37.7553 31.2175 38.3851 30.4435 38.3865L30.4483 41.1865ZM26.2432 36.9861C26.2471 39.3028 28.1268 41.1825 30.4435 41.1865L30.4483 38.3865C29.6743 38.3851 29.0445 37.7553 29.0432 36.9813L26.2432 36.9861ZM26.2432 33.2485V36.9837H29.0432V33.2485H26.2432ZM23.908 34.6485H27.6432V31.8485H23.908V34.6485ZM19.7052 30.4482C19.7092 32.7648 21.5889 34.6445 23.9056 34.6485L23.9103 31.8485C23.1363 31.8472 22.5065 31.2174 22.5052 30.4434L19.7052 30.4482ZM23.9056 26.2431C21.5889 26.247 19.7092 28.1267 19.7052 30.4434L22.5052 30.4482C22.5065 29.6742 23.1363 29.0444 23.9103 29.043L23.9056 26.2431ZM27.6432 26.2431H23.908V29.0431H27.6432V26.2431Z'
        fill={backgroundColor}
        mask='url(#path-3-inside-1_1_781)'
      />
    </svg>
  );
};
