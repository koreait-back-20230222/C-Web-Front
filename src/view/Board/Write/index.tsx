import { AddCircleOutline } from '@mui/icons-material'
import { Box, Button, Card, Chip, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React from 'react'

export default function BoardWrite() {
  return (
    <Box>
      <Typography>일반 게시판</Typography>
      <Card>
        <Box>
          <Box>
            <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
              <InputLabel>제목</InputLabel>
              <OutlinedInput type='text'/>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
              <InputLabel>해시태그</InputLabel>
              <Input
                type='text'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {}}
                    >
                      <AddCircleOutline />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box>
              <Chip sx={{ mt: '1vh', ml: '0.25vh', mr: '0.25vh' }} label="# HashTag" variant="outlined" onDelete={() => {}} />
              <Chip sx={{ mt: '1vh', ml: '0.25vh', mr: '0.25vh' }} label="# HashTag" variant="outlined" onDelete={() => {}} />
            </Box>
          </Box>
          <Box>
            <FormControl fullWidth variant='outlined' sx={{ mt: '2.5vh' }}>
              <InputLabel>내용</InputLabel>
              <OutlinedInput type='text' multiline minRows={10} label="내용" />
            </FormControl>
          </Box>
          <Box display='flex'>
            <Box flex='1'>날씨</Box>
            <Box flex='1'>기온</Box>
          </Box>
        </Box>
      </Card>
      <Box>
        <Button>등록하기</Button>
      </Box>
    </Box>
  )
}
