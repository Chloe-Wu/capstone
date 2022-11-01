import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Example from "./pages/School/Example";

function App() {
  return (
    <Router>
      {/* <Topbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/school1" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
