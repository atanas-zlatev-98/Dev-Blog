import { Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import "./App.scss";
import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  return (
    <>
      <div className="main">
        <NavigationBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
