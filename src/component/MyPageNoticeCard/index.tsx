import { Favorite, Message, Person } from '@mui/icons-material'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function MyPageNoticeCard() {
  return (
    <Card>
        <Box>
            <Favorite />
            <Box>
                <Typography>'닉네임'이 ''제목을 좋아합니다.</Typography>
            </Box>
        </Box>
    </Card>
  )
}
