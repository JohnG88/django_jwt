import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="topnav">
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </div>
        </>
    );
}
