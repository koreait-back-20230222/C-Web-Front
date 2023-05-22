import { AddCircleOutline } from '@mui/icons-material'
import { Box, Button, Card, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React from 'react'

export default function InquiryWrite() {
  return (
    <Box>
      <Typography>문의 게시판</Typography>
      <Card>
        <Box>
          <Box>
            <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
              <InputLabel>제목</InputLabel>
              <OutlinedInput type='text'/>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth variant='outlined' sx={{ mt: '2.5vh' }}>
              <InputLabel>내용</InputLabel>
              <OutlinedInput type='text' multiline minRows={10} label="내용" />
            </FormControl>
          </Box>
        </Box>
      </Card>
      <Box>
        <Button>등록하기</Button>
      </Box>
    </Box>
  )
}
