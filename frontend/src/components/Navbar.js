import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../utils/AuthContext";

export default function Navbar() {
    const navigate = useNavigate();
    let { user, logoutUser } = useContext(AuthContext);

    return (
        <>
            {user ? (
                <div className="topnav">
                    <li>{user.username}</li>
                    <li onClick={logoutUser}>Logout</li>
                </div>
            ) : (
                <div className="topnav">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            )}
        </>
    );
}
