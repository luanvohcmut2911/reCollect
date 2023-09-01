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
import DonateForm from "./Pages/DonateForm";
import EventModal from "./Components/EventModal";
import About from "./Pages/About";
import GoogleMaps from "./apis/googleMapsAPI/GoogleMaps"
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
            <Route path="/profile/:uid" element={<Profile />} />
            <Route path="/donate-info/:uuid" element={<DonateInfo />} />
            <Route path="/item-info/:uuid" element={<ItemInfo />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/donate-form/" element={<DonateForm />} />
            <Route path="/education" element={<About />} />
            <Route path="/maptesting" element={<GoogleMaps />} />
          </Routes>
          <AddModal />
          <EventModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
