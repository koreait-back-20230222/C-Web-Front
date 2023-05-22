import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function UserCard() {
    return (
        <Card>
            <Box>
                <Avatar />
                <Typography>닉네임</Typography>
            </Box>
        </Card>
    )
}
