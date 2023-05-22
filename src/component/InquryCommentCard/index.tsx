import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import UserCard from '../UserCard'

export default function InquiryCommentCard() {
  return (
    <Box>
      <Box>
        <UserCard />
        <Typography>댓글 내용</Typography>
        <Typography>댓글 작성 일시</Typography>
      </Box>
      <Box>
        <Button>수정</Button>
        <Button>삭제</Button>
      </Box>
    </Box>
  )
}
