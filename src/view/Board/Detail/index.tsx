import { Favorite } from '@mui/icons-material';
import { Avatar, Box, Button, Card, Chip, FormControl, IconButton, InputLabel, OutlinedInput, Pagination, Typography } from '@mui/material';
import UserCommentCard from '../../../component/UserCommentCard';
import BoardCommentCard from '../../../component/BoardCommentCard';

export default function BoardDetail() {
  return (
    <Box>
      <Box>
        <Box>
          <Avatar />
          <Typography>닉네임</Typography>
          <Button>팔로우</Button>
        </Box>
        <Box>
          <Box>
            <Typography>제목</Typography>
          </Box>
          <Box>
            <Typography>좋아요: 10</Typography>
            <Typography>조회수: 10</Typography>
            <Typography>2023-05-22</Typography>
          </Box>
          <Box>
            <Chip sx={{ mt: '1vh', ml: '0.25vh', mr: '0.25vh' }} label="# HashTag" variant="outlined" />
          </Box>
        </Box>
        <Box>
          <Box>
            <IconButton>
              <Favorite />
            </IconButton>
          </Box>
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
        <Box>날씨</Box>
        <Box>기온</Box>
      </Box>
      <Box>
        <Typography>댓글 (10)</Typography>
        <Card>
          <Box>
            <BoardCommentCard />
            <BoardCommentCard />
            <BoardCommentCard />
            <BoardCommentCard />
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
