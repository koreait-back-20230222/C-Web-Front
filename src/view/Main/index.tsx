import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import UserCard from '../../component/UserCard'
import BoardImageCard from '../../component/BoardImageCard'

export default function Main() {
  return (
    <Box>
      <Box>
        <Box>검색창</Box>
        <Box>상세 검색</Box>
      </Box>
      <Box><Button>작성하기</Button></Box>
        <Box>현재 날씨</Box>
        <Box>
            <Grid container>
                <Grid item xs={9}>
                  <Box>
                    <Typography>인기 게시물 Top 5</Typography>
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <BoardImageCard />
                        </Grid>
                        <Grid item xs={6}>
                          <BoardImageCard />
                        </Grid>
                        <Grid item xs={4}>
                          <BoardImageCard />
                        </Grid>
                        <Grid item xs={4}>
                          <BoardImageCard />
                        </Grid>
                        <Grid item xs={4}>
                          <BoardImageCard />
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box>
                    <Typography>인기유저 Top 5</Typography>
                    <Box>
                      <UserCard />
                      <UserCard />
                      <UserCard />
                      <UserCard />
                      <UserCard />
                    </Box>
                  </Box>
                </Grid>
            </Grid>
        </Box>
        <Box>
          <Box>
            <Typography>일반 게시물</Typography>
            <Button>게시판</Button>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={3}><BoardImageCard /></Grid>
              <Grid item xs={3}><BoardImageCard /></Grid>
              <Grid item xs={3}><BoardImageCard /></Grid>
              <Grid item xs={3}><BoardImageCard /></Grid>
              <Grid item xs={3}><BoardImageCard /></Grid>
              <Grid item xs={3}><BoardImageCard /></Grid>
              <Grid item xs={3}><BoardImageCard /></Grid>
              <Grid item xs={3}><BoardImageCard /></Grid>
            </Grid>
          </Box>
        </Box>
    </Box>
  )
}
