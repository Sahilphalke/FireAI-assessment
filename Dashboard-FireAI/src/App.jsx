
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SettingsPage from "./components/SettingsPage"; 

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} /> {}
                    <Route path="/settings" element={<SettingsPage />} /> {}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
