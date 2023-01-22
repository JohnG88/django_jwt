import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Hello from "./pages/Hello";
import Navbar from "./components/Navbar";
import ProtectedComponent, { ProtectedRoute } from "./utils/ProtectedComponent";

import { AuthProvider } from "./utils/AuthContext";

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/hello"
                            element={
                                <ProtectedComponent>
                                    <Hello />
                                </ProtectedComponent>
                            }
                        />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
