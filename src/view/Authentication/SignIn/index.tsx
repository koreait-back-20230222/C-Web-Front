import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import { Check, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { MuiFileInput } from 'mui-file-input';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const navigator = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box display='flex' justifyContent='center'>
      <Box minWidth='400px' width='30vw' >
        <Box display='flex' justifyContent='center'>
          <Typography>로그인</Typography>
        </Box>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>이메일</InputLabel>
          <Input type='email' />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>비밀번호</InputLabel>
          <Input
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={(event) => event.preventDefault()}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box>
          <Button fullWidth>로그인</Button>
          <Button fullWidth onClick={() => navigator('/auth/find')}>이메일 / 비밀번호 찾기</Button>
        </Box>
      </Box>
    </Box>
  )
}
