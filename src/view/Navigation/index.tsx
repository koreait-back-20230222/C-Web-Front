import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  
  const navigator = useNavigate();
  
  return (
    <Box>
        <Button onClick={() => navigator('/auth/sign-in')}>로그인</Button>
        <Button onClick={() => navigator('/auth/sign-up')}>회원가입</Button>
        <Button>작성하기</Button>
    </Box>
  )
}
