import { Box, FormControl, IconButton, InputBase, InputLabel, MenuItem, Pagination, Paper, Select, SelectChangeEvent } from '@mui/material'
import { Search } from '@mui/icons-material';
import { useState } from 'react'
import UserProfileCard from '../../../component/UserProfileCard';

export default function UserSearch() {

    const [age, setAge] = useState<string>('20');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const SearchBar = () => (
        <Box display='flex' alignItems='center'>
            <FormControl sx={{width: '100px'}}>
                <InputLabel>Age</InputLabel>
                <Select
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{ display: 'flex', alignItems: 'center', height: '50px' }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Paper
                component="form"
                sx={{display: 'flex', alignItems: 'center', width: 400, height: '50px' }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="검색"
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <Search />
                </IconButton>
            </Paper>
        </Box>
    )

    return (
        <Box>
            <SearchBar />
            <UserProfileCard />
            <Pagination count={10} />
        </Box>
    )
}
