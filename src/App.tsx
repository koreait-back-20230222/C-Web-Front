import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './view/Main';
import Navigation from './view/Navigation';
import SignIn from './view/Authentication/SignIn';
import SignUp from './view/Authentication/SignUp';
import Find from './view/Authentication/Find';
import UserSearch from './view/User/Search';
import UserInfo from './view/User/Info';

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
      </Routes>
    </>
    
  );
}

export default App;
