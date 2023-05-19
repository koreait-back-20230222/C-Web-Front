import { Autocomplete, Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { Check, Visibility, VisibilityOff, Search } from '@mui/icons-material';
import { useState } from 'react';
import { MuiFileInput } from 'mui-file-input';

interface Gender {
  label: string,
  value: string
}

const defaultProps = {
  options: [{label: '여자', value: 'woman'}, {label: '남자', value: 'man'}],
  getOptionLabel: (option: Gender) => option.label,
};

export default function SignUp() {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

  return (
    <Box display='flex' justifyContent='center'>
      <Box minWidth='400px' width='30vw' >
        <Box display='flex' justifyContent='center'>
          <Typography>회원가입</Typography>
        </Box>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>이메일</InputLabel>
          <Input
            type='text'
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => {}}>
                  <Check />
                </IconButton>
              </InputAdornment>
            }
          />
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
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>비밀번호 확인</InputLabel>
          <Input
            type={showPasswordCheck ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPasswordCheck((show) => !show)}
                  onMouseDown={(event) => event.preventDefault()}
                >
                  {showPasswordCheck ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>이름</InputLabel>
          <Input type='text' />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>휴대전화 번호</InputLabel>
          <Input type='text' />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>닉네임</InputLabel>
          <Input
            type='text'
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => {}}>
                  <Check />
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>주소</InputLabel>
            <Input
              type='text'
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => {}}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box mt='2.5vh' display='flex' flexDirection='column' alignItems='center'>
            <Box component='img' mb='1.5vh' border='1px solid black' borderRadius='50%' width='200px' height='200px' bgcolor='red'>
                
            </Box>
            <MuiFileInput label='프로필 사진' fullWidth value={null} onChange={() => {}} />
          </Box>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>생년월일</InputLabel>
            <Input type='text' />
          </FormControl>
          <Autocomplete
            {...defaultProps}
            id="disable-close-on-select"
            renderInput={(params) => (
              <TextField {...params} label='성별' sx={{ m: 1 }} variant="standard" />
            )}
          />
          <Box>
            <Button fullWidth>회원 가입</Button>
          </Box>
      </Box>
    </Box>
  )
}
