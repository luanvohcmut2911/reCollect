import "./App.css";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import DonateInfo from "./Pages/DonateInfo";
import ItemInfo from "./Pages/ItemInfo";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import AddModal from "./Components/AddModal";
import UserInfo from "./Pages/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/donate-info" element={<DonateInfo />} />
            <Route path="/item-info" element={<ItemInfo />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <AddModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
