import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <h1>Welcome to the Registration App</h1>
            <Link to="/add" className="btn btn-primary">
                Add New Row
            </Link>
            &nbsp;
            <Link to="/" className="btn btn-secondary">
                View All Rows
            </Link>
        </div>
    );
};

export default Navbar;
