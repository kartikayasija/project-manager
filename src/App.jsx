import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/logout" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
