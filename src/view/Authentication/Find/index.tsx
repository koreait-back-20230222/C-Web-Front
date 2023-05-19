import { Box, Button, Card, FormControl, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'

export default function Find() {
  return (
    <Box>
      <Card sx={{ width: '500px', p: '25px' }}>
        <Box display='flex' justifyContent='center'>
          <Typography>이메일 찾기</Typography>
        </Box>
        <Box>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>이름</InputLabel>
            <Input type='text' />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>휴대전화 번호</InputLabel>
            <Input type='text' />
          </FormControl>
        </Box>
        <Box display='flex' justifyContent='center'>
          <Button>이메일 찾기</Button>
        </Box>
      </Card>
      <Card sx={{ width: '500px',mt: '10vh', p: '25px' }}>
        <Box display='flex' justifyContent='center'>
          <Typography>비밀번호 찾기</Typography>
        </Box>
        <Box>
          <FormControl fullWidth variant="standard">
            <InputLabel>이메일</InputLabel>
            <Input type='email' />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel>휴대전화 번호</InputLabel>
            <Input type='text' />
          </FormControl>
        </Box>
        <Box display='flex' justifyContent='center'>
          <Button>비밀번호 찾기</Button>
        </Box>
      </Card>
    </Box>
  )
}
