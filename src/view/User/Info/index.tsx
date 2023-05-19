import { Box } from '@mui/material'
import React from 'react'

export default function UserInfo() {
  return (
    <Box>
      <Box>{/* 유저 정보 */}</Box>
      <Box>
        <Box>{/* 팔로잉 */}</Box>
        <Box>{/* 팔로워 */}</Box>
      </Box>
      <Box>{/* 최근 작성한 게시물 */}</Box>
      <Box>{/* 최근 작성한 댓글 */}</Box>
    </Box>
  )
}
