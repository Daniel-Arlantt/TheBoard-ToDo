import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </Router>
  );
}

export default App;
