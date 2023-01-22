import React from "react";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

const useAuthB = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const token = localStorage.getItem("access");

    const decoded = jwt_decode(token);
    console.log("decoded", decoded);

    const currentTime = new Date().getTime() / 1000;
    console.log("current time", currentTime);

    /*
    const checkTokenExpiration = (token) => {
        const decoded = jwt_decode(token);
        const currentTime = new Data().getTime() / 1000;

        if (decoded.exp < currentTime) {
            console.log("Access token has expired");
            return true;
        }
        console.log("Access token is valid");
        return false;
    };
    */

    useEffect(() => {
        if (decoded.exp < currentTime) {
            console.log("Access token is valid");
            setIsAuthenticated(true);
        } else {
            console.log("Access token has expired");
            setIsAuthenticated(false);
        }
    }, []);

    return isAuthenticated;
};

export default useAuthB;
