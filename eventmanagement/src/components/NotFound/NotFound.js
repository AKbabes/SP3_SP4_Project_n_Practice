import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound-wrp d-flex justify-content-center align-items-center">
        <div className="notfound-card text-center">
            <div className="notfound-404">
                <h1>4<span>0</span>4</h1>
            </div>
            <p>The page you are looking for might have been removed. </p>
            
        </div>
    </div>
    );
};

export default NotFound;