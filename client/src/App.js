import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import Home from "./components/home.js";
import UserList from "./components/user.js";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/sign-up" element = {<Signup />} />
        <Route path='/user' element = {<UserList />} />
       </Routes>
    </BrowserRouter>
    );
}

export default App;
