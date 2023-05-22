import { Box, Typography } from '@mui/material'
import React from 'react'
import UserCard from '../UserCard'

export default function UserCommentCard() {
  return (
    <Box>
        {1}
        <UserCard />
        <Typography>댓글 내용</Typography>
        <Typography>댓글 작성 일시</Typography>
    </Box>
  )
}
