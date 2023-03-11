import './App.css';
import Signin from './Pages/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element = {<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
