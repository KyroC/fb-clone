import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.js"
import Signup from "./components/signup.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/sign-up" element = {<Signup />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
