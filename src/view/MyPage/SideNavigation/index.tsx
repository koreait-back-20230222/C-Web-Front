import { Dispatch, SetStateAction } from 'react';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { AssignmentInd, Description, Diversity1, Favorite, Notifications } from '@mui/icons-material';
import { MyPageTab } from '../../../constant/enum';

interface Props {
  tab: MyPageTab;
  setTab: Dispatch<SetStateAction<MyPageTab>>;
}

export default function MyPageSideNavigation({ setTab }: Props) {
  return (
    <Box>
      <Box>
        <Avatar />
      </Box>
      <Typography>닉네임</Typography>
      <Box>
        <Box>
          <IconButton onClick={() => setTab(MyPageTab.NOTICE)}><Notifications /></IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setTab(MyPageTab.UPDATE)}><AssignmentInd /></IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setTab(MyPageTab.BOARD_LIST)}><Description /></IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setTab(MyPageTab.HEART_LIST)}><Favorite /></IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setTab(MyPageTab.FOLLOW_LIST)}><Diversity1 /></IconButton>
        </Box>
      </Box>
    </Box>
  )
}
