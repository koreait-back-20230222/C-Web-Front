import { Avatar, Box, Button, Card, FormControl, InputLabel, OutlinedInput, Pagination, Typography } from '@mui/material'
import React from 'react'
import InquiryCommentCard from '../../../component/InquryCommentCard'

export default function InquiryDetail() {
  return (
    <Box>
      <Box>
        <Box>
          <Avatar />
          <Typography>닉네임</Typography>
        </Box>
        <Box>
          <Box>
            <Typography>제목</Typography>
          </Box>
          <Box>
            <Typography>2023-05-22</Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Button>수정하기</Button>
            <Button>삭제하기</Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box></Box>
      </Box>
      <Box>
        <Typography>내용</Typography>
      </Box>
      <Box>
        <Typography>댓글 (10)</Typography>
        <Card>
          <Box>
            <InquiryCommentCard />
            <InquiryCommentCard />
            <InquiryCommentCard />
            <InquiryCommentCard />
            <InquiryCommentCard />
          </Box>
          <Pagination count={10} />
        </Card>
        <Box>
          <FormControl fullWidth variant='outlined' sx={{ mt: '2.5vh' }}>
            <InputLabel>댓글</InputLabel>
            <OutlinedInput type='text' multiline minRows={3} label="댓글" />
          </FormControl>
        </Box>
        <Button>댓글 작성</Button>
      </Box>
    </Box>
  )
}
