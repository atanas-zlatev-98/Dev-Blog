import { Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import "./App.scss";
import NavigationBar from "./components/navigation/NavigationBar";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import { ToastContainer } from "react-toastify";
import CreatePost from "./components/pages/posts/create-post/CreatePost";
import SinglePost from "./components/pages/posts/single-post/SinglePost";
import TagSinglePage from "./components/pages/tags/TagSinglePage";

function App() {
  return (
    <>
      <div className="main">
        <NavigationBar />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/posts/create-post" element={<CreatePost/>} />
            <Route path="/posts/:postId" element={<SinglePost/>} />
            <Route path="/tags/:tag" element={<TagSinglePage/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
