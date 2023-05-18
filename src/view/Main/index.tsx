import { Box, Grid } from '@mui/material'
import React from 'react'

export default function Main() {
  return (
    <Box>
        <Box>검색창</Box>
        <Box>상세 검색</Box>
        <Box>현재 날씨</Box>
        <Box>
            <Grid container>
                <Grid item xs={9}> 인기 게시물 TOP 5 </Grid>
                <Grid item xs={3}> 인기유저 TOP5 </Grid>
            </Grid>
        </Box>
        <Box>일반 게시물</Box>
    </Box>
  )
}
