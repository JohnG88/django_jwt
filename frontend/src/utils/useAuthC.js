import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

//import { useFetch } from "./useFetch";

/*
const AuthContext = createContext();

export default AuthContext();

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ name: "John" }}>
            {children}
        </AuthContext.Provider>
    );
};
*/

const useAuthC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    //const [accessToken, setAccessToken] = useState(
    //    localStorage.getItem("access")
    //);
    //const [refreshToken, setRefreshToken] = useState(
    //    localStorage.getItem("refresh")
    //);

    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    useEffect(() => {
        if (!accessToken) {
            setIsAuthenticated(false);
            return;
        }

        try {
            const decodedToken = jwtDecode(accessToken);
            const exp = decodedToken.exp;
            console.log("Exp", exp);
            const currentTime = new Date().getTime() / 1000;
            console.log("current time", Math.trunc(currentTime));

            const dateNow = Date.now();
            console.log("date now", dateNow);

            if (Math.trunc(currentTime) > exp) {
                console.log("Access token has expired");
                setIsAuthenticated(false);
                //localStorage.removeItem("access");
                //localStorage.removeItem("refresh");
                //refreshAccessToken();
            } else {
                //console.log("Access token is valid");
                setIsAuthenticated(true);
            }
        } catch (err) {
            console.log("Error");
            setIsAuthenticated(false);
            //localStorage.removeItem("access");
            //localStorage.removeItem("refresh");
        }
    }, []);
    const refreshAccessToken = () => {
        const url = "http://localhost:8000/api/token/refresh/";
        //const refreshToken = localStorage.getItem("refresh");

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ refresh: refreshToken }),
        };

        const response = fetch(url, options);
        const data = response.json();

        console.log("access refresh token", data);

        //setAccessToken(data.access);
        //setRefreshToken(data.refresh);

        //localStorage.setItem("access", JSON.stringify(data.access));
        //localStorage.setItem("refresh", JSON.stringify(refreshToken));
    };

    return { isAuthenticated };
};

export default useAuthC;
