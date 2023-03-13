import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Homepage from './Pages/Homepage';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/signin' element = {<Signin />} />
            <Route path='/signup' element = {<Signup />} />
            <Route path='/home' element= {<Homepage />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
