import React, { useContext, useState, useEffect } from "react";
import { useFetch } from "../utils/useFetch";
import AuthContext from "../utils/AuthContext";

const url = "http://localhost:8000/hello/";
const Hello = () => {
    const [message, setMessage] = useState([]);

    let { user, accessToken, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        getMessage();
    }, []);

    /*
    const access = JSON.parse(localStorage.getItem("access"));

    const { data } = useFetch(url, options);
    console.log("data", data);

    setMessage(data.message);
    */

    const getMessage = async () => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const response = await fetch(url, options);
        console.log("hello response", response);

        const data = await response.json();
        console.log("hello data", data);

        if (response.status === 200) {
            setMessage(data.message);
        } else if (response.statusText === "Unauthorized") {
            logoutUser();
        }
    };

    return (
        <>
            <h4>Message: {message}</h4>
            {user ? <h5>{user.username}</h5> : null}
        </>
    );
};

export default Hello;
