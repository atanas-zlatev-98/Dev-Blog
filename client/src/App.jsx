import { Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import "./App.scss";
import NavigationBar from "./components/navigation/NavigationBar";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

function App() {
  return (
    <>
      <div className="main">
        <NavigationBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<Login/>} />
            <Route path="/auth/register" element={<Register/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
