import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import React from 'react'

export default function UserProfileCard() {
    return (
        <Card>
            <Box display='flex' alignItems='center'>
                <Avatar />
                <Box width='100%'>
                    <Box display='flex'>
                        <Typography flex='1'>안녕</Typography>
                        <Typography flex='1'>팔로잉: 1</Typography>
                        <Typography flex='1'>팔로워: 1</Typography>
                        <Typography flex='1'>게시물: 10</Typography>
                    </Box>
                    <Box>
                        { true ? <Button>팔로우</Button> : <Button>팔로우 취소</Button> }
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}
