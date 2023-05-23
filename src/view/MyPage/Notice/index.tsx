import { Box, Typography } from '@mui/material'
import React from 'react'
import MyPageNoticeCard from '../../../component/MyPageNoticeCard'

export default function MyPageNotice() {
  return (
    <Box>
      <Typography>알림</Typography>
      <Box>
        <MyPageNoticeCard />
        <MyPageNoticeCard />
        <MyPageNoticeCard />
        <MyPageNoticeCard />
        <MyPageNoticeCard />
      </Box>
    </Box>
  )
}
