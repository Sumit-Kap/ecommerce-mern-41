import "./App.css";
import { Header } from "./Components/Common/Header";
import { Routes, Route } from "react-router";
import { Home } from "./Components/Pages/Home";
import { Login } from "./Components/Pages/Login";
import { SignUp } from "./Components/Pages/SignUp";
import { Profile } from "./Components/Pages/Profile";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<SignUp />} path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
