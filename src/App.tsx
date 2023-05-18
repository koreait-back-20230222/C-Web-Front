import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './view/Main';
import Navigation from './view/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
    
  );
}

export default App;
