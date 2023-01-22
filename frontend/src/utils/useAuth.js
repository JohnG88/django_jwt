import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [accessToken, setAccessToken] = useState(
        localStorage.getItem("access")
    );

    console.log("Access token", accessToken);

    //useEffect(() => {
    //    verifyJWT();
    //}, []);

    const url = "http://localhost:8000/api/token/verify/";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        //credentials: "include",
        body: JSON.stringify({ token: accessToken }),
    };

    useEffect(() => {
        console.log("useEffect access token", accessToken);
        if (!accessToken) {
            setIsAuthenticated(false);
            return;
        }

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                console.log("auth data", data);
                if (data.valid) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            })
            .catch((err) => {
                setIsAuthenticated(false);
                console.error(err);
            });
    }, []);

    /*
    const verifyJWT = async () => {
        const { response } = useFetch(url, options);
        console.log("response", response);
        try {
            if (accessToken == null) return setIsLoading(false);

            if (response.ok) {
                setIsAuthenticated(true);
            } else {
                throw new Error();
            }
        } catch (err) {
            //localStorage.removeItem("access");
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };
    */

    return isAuthenticated;
};

export default useAuth;
