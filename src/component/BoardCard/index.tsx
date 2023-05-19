import { Avatar, Box, Card, Typography } from '@mui/material'
import { Comment, Favorite } from '@mui/icons-material';

export default function BoardCard() {
    return (
        <Card>
            <Box>
                <Box display='flex'>
                    <Avatar />
                    <Box>
                        <Typography>닉네임</Typography>
                        <Typography>작성일시</Typography>
                    </Box>
                </Box>
                <Box display='flex'>
                    <Typography>제목</Typography>
                    <Typography>해시태그</Typography>
                </Box>
                <Box>
                    <Typography>내용 요약</Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Box display='flex' alignItems='center'>
                        <Favorite />
                        <Typography display='flex' alignItems='centerd'>10</Typography>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <Comment />
                        <Typography display='flex' alignItems='centerd'>10</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box component='img' />
            </Box>
        </Card>
    )
}
