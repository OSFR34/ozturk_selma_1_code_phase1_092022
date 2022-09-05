import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DetailPage from './components/DetailPage/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} /> 
        <Route path='/profile' element={<ProfilePage/>} />  
        <Route path='/transactions/:id' element={<DetailPage/>} />     
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
