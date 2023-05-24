import { Box, Pagination, Typography } from '@mui/material'
import React from 'react'
import MyPageBoardCard from '../../../component/MyPageBoardCard'

export default function MyPageBoardList() {
  return (
    <Box>
      <Typography>내가 쓴 게시물</Typography>
      <Box>
        <Box>
          <MyPageBoardCard />
          <MyPageBoardCard />
          <MyPageBoardCard />
          <MyPageBoardCard />
          <MyPageBoardCard />
        </Box>
        <Box>
          <Pagination count={10} />
        </Box>
      </Box>
    </Box>
  )
}
