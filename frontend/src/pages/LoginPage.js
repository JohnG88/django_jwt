import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../utils/AuthContext";

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    // Can get username and password using e.target.username.value, e.target.password.value
    return (
        <div>
            <form onSubmit={loginUser}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                />
                <input type="submit" />
            </form>
        </div>
    );

    /*
    const navigate = useNavigate();
    const userRef = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [access, setAccess] = useState("");
    const [refresh, setRefresh] = useState("");
    */

    /*
    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        };
        const response = await fetch(
            "http://localhost:8000/api/token/",
            requestOptions
        );
        const data = await response.json();
        console.log("Data", data);
        setAccess(data.access);
        setRefresh(data.refresh);
        localStorage.setItem("access", JSON.stringify(data.access));
        localStorage.setItem("refresh", JSON.stringify(data.refresh));
        setUsername("");
        setPassword("");
        navigate("/hello");
    };
    */

    /*
    return (
        <section>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label html="Username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
                <button>Submit</button>
            </form>
        </section>
    );
    */
};

export default Login;
