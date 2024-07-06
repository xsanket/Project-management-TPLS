import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProtectedPage from './components/ProtectedPage';


const App = () => {

    return (

        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<ProtectedPage><Home /></ProtectedPage>} />
                    {/* <Route path="/register" element={<Register />} /> */}
                </Routes>
            </Router>
        </div>

    );
};

export default App;