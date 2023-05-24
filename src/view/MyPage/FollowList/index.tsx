import { Box, Typography } from '@mui/material'
import React from 'react'
import UserCard from '../../../component/UserCard'

export default function MyPageFollowList() {
  return (
    <Box>
      <Typography>Follow</Typography>
      <Box>
        <Box>
          <Typography>팔로잉</Typography>
          <Typography>10</Typography>
          <Box>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </Box>
        </Box>
        <Box>
          <Typography>팔로워</Typography>
          <Typography>10</Typography>
          <Box>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
