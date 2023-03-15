import "./App.css";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import AddModal from "./Components/AddModal";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <AddModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
