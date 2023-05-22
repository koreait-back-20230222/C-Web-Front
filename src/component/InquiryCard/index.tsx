import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function InquiryCard() {
  return (
    <Card>
        <Box>
            <Avatar/>
            <Box>
                <Typography>닉네임</Typography>
                <Typography>작성일시</Typography>
            </Box>
        </Box>
        <Box>
            <Typography>제목</Typography>
            <Typography>답변 대기</Typography>
        </Box>
    </Card>
  )
}
