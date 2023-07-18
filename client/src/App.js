import React from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRowForm from './components/AddRowForm';
import ViewAllRows from './components/ViewAllRows';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />

                <div className="container mt-4">
                    <Routes>
                        <Route index element={<ViewAllRows />} />
                        <Route path="/add" element={<AddRowForm />} />
                    </Routes>


                    <Outlet />
                </div>
            </div>
        </Router>
    );
}

export default App;
