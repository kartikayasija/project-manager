import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/logout" element={<Login />}/>
          <Route path="/" element={<ProjectList />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
