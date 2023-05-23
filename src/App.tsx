import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './view/Main';
import Navigation from './view/Navigation';
import SignIn from './view/Authentication/SignIn';
import SignUp from './view/Authentication/SignUp';
import Find from './view/Authentication/Find';
import UserSearch from './view/User/Search';
import UserInfo from './view/User/Info';
import BoardList from './view/Board/List';
import BoardDetail from './view/Board/Detail';
import BoardWrite from './view/Board/Write';
import InquiryCard from './component/InquiryCard';
import InquiryList from './view/Inquiry/List';
import InquiryDetail from './view/Inquiry/Detail';
import InquiryWrite from './view/Inquiry/Write';
import MyPage from './view/MyPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/auth'>
          <Route path='find' element={<Find />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>
        <Route path='/user'>
          <Route path='search' element={<UserSearch />} />
          <Route path='info/:userEmail' element={<UserInfo />} />
        </Route>
        <Route path='/board'>
          <Route path='list' element={<BoardList />} />
          <Route path='detail/:boardNumber' element={<BoardDetail />} />
          <Route path='write' element={<BoardWrite />} />
        </Route>
        <Route path='/inquiry'>
          <Route path='list' element={<InquiryList />} />
          <Route path='detail/:inquiryNumber' element={<InquiryDetail />} />
          <Route path='write' element={<InquiryWrite />} />
        </Route>
        <Route path='/my-page' element={<MyPage />} />
      </Routes>
    </>
    
  );
}

export default App;
