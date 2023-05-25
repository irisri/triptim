import React from 'react';
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_COLOR, DEFAULT_SIZE } from '../utils/const';

export const FilterIcon = ({
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}) => {
  return (
    <svg width={size} height={size} viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='34' height='34' rx='10' fill={backgroundColor} />
      <path
        d='M17 25C12.5817 25 9 21.4183 9 17C9 12.5817 12.5817 9 17 9C21.4183 9 25 12.5817 25 17C25 21.4183 21.4183 25 17 25ZM17 23.6667C20.6819 23.6667 23.6667 20.6819 23.6667 17C23.6667 13.3181 20.6819 10.3333 17 10.3333C13.3181 10.3333 10.3333 13.3181 10.3333 17C10.3333 20.6819 13.3181 23.6667 17 23.6667ZM13 14.3333C13 13.9651 13.299 13.6667 13.6683 13.6667H20.3317C20.7008 13.6667 21 13.9626 21 14.3333C21 14.7015 20.701 15 20.3317 15H13.6683C13.2992 15 13 14.7041 13 14.3333ZM14 17C14 16.6318 14.2975 16.3333 14.665 16.3333H19.335C19.7023 16.3333 20 16.6292 20 17C20 17.3682 19.7025 17.6667 19.335 17.6667H14.665C14.2977 17.6667 14 17.3708 14 17ZM15 19.6667C15 19.2985 15.3007 19 15.6695 19H18.3305C18.7003 19 19 19.2959 19 19.6667C19 20.0349 18.6994 20.3333 18.3305 20.3333H15.6695C15.2997 20.3333 15 20.0374 15 19.6667Z'
        fill={color}
      />
    </svg>
  );
};
