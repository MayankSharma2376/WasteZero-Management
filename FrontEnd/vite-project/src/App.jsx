import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import UserDashboard from "./pages/dashboard/UserDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/dashboard/user" element={<UserDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
