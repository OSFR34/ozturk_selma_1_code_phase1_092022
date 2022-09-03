import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} /> 
        <Route path='/profile' element={<ProfilePage/>} />       
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
