import React from 'react';
import styled from '@emotion/styled';
import { DialogTitle, DialogContent, List, ListItem } from '@mui/material';

export interface UserFreindsProps {
  id: number;
  username: string;
  email: number;
}

interface FriendListProps {
  friends: UserFreindsProps[];
}

const DialogTitleStyled = styled(DialogTitle)`
  font-weight: 700;
  font-size: 28px;
`;

const ListItemStyled = styled(ListItem)`
  font-weight: 400;
  font-size: 14px;
`;

export const FriendList = ({ friends }: FriendListProps) => {
  return (
    <>
      <DialogTitleStyled>Friend list</DialogTitleStyled>
      <DialogContent>
        <List sx={{ pt: 0 }}>
          {friends.map((friend) => (
            <ListItemStyled key={friend.email}>
              Username: {friend.username}, email: {friend.email}
            </ListItemStyled>
          ))}
        </List>
      </DialogContent>
    </>
  );
};
