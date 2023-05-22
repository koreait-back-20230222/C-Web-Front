import { Box, Button, Pagination, Typography } from '@mui/material'
import React from 'react'
import BoardCard from '../../../component/BoardCard'

export default function BoardList() {
  return (
    <Box>
      <Box>
        <Typography>게시판</Typography>
      </Box>
      <Box>
        <Button>작성하기</Button>
      </Box>
      <Box>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </Box>
      <Box>
        <Pagination count={10} />
      </Box>
    </Box>
  )
}
