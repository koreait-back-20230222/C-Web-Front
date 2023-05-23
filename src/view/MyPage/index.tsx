import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import MyPageSideNavigation from './SideNavigation'
import { MyPageTab } from '../../constant/enum';
import MyPageNotice from './Notice';
import MyPageUpdate from './Update';
import MyPageBoardList from './BoardList';
import MyPageHeartList from './HeartList';
import MyPageFollowList from './FollowList';

export default function MyPage() {

  const [tab, setTab] = useState<MyPageTab>(MyPageTab.NOTICE);

  return (
    <Box>
      <Grid container>
        <Grid item xs={3}>
          <MyPageSideNavigation tab={tab} setTab={setTab} />
        </Grid>
        <Grid item xs={9}>
          {
            tab === MyPageTab.NOTICE ? <MyPageNotice /> :
            tab === MyPageTab.UPDATE ? <MyPageUpdate /> :
            tab === MyPageTab.BOARD_LIST ? <MyPageBoardList /> :
            tab === MyPageTab.HEART_LIST ? <MyPageHeartList /> :
            tab === MyPageTab.FOLLOW_LIST ? <MyPageFollowList /> : <></>
          }
        </Grid>
      </Grid>
    </Box>
  )
}
