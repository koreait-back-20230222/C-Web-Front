import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import UserDetailProfileCard from '../../../component/UserDetailProfileCard'
import UserCard from '../../../component/UserCard'
import UserBoardCard from '../../../component/UserBoardCard'
import UserCommentCard from '../../../component/UserCommentCard'

export default function UserInfo() {
  return (
    <Box>
      <Box>
        <UserDetailProfileCard />
      </Box>
      <Grid container>
        <Grid item>
          <Box>
            <Typography>팔로잉 {'(10)'}</Typography>
            <Card>
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </Card>
          </Box>
        </Grid>
        <Grid item>
        <Box>
            <Typography>팔로워 {'(10)'}</Typography>
            <Card>
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Typography>최근 작성한 게시물</Typography>
        <Card>
          <Grid>
            <Grid item><UserBoardCard /></Grid>
            <Grid item><UserBoardCard /></Grid>
            <Grid item><UserBoardCard /></Grid>
          </Grid>
        </Card>
      </Box>
      <Box>
        <Typography>최근 작성한 댓글</Typography>
        <Card>
          <UserCommentCard />
          <UserCommentCard />
          <UserCommentCard />
          <UserCommentCard />
        </Card>
      </Box>
    </Box>
  )
}
