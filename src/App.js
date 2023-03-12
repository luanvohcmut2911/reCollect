import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element = {<Signin />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/home' element= {<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
