import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
