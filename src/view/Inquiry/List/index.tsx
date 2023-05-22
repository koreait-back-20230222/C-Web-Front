import { Box, Button, Pagination, Typography } from '@mui/material'
import React from 'react'
import InquiryCard from '../../../component/InquiryCard'

export default function InquiryList() {
  return (
    <Box>
        <Box>
            <Typography>문의 게시판</Typography>
        </Box>
        <Box>
            <Button>작성하기</Button>
        </Box>
        <Box>
            <InquiryCard />
            <InquiryCard />
            <InquiryCard />
            <InquiryCard />
            <InquiryCard />
        </Box>
        <Box>
            <Pagination count={10} />
        </Box>
    </Box>
  )
}
