import React, { useState } from "react";
import { useFetch } from "./useFetch";

const CheckTokenExpiry = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [accessToken, setAccessToken] = useState(
        JSON.parse(localStorage.getItem("access"))
    );
    const [refreshToken, setRefreshToken] = useState(
        JSON.parse(localStorage.getItem("refresh"))
    );
    const url = "http://localhost:8000/api/refresh/verify/";

    const CheckToken = async () => {
        try {
            // Send a request with the access token to check if it is still valid
            const options = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };
            const { response } = useFetch(url, options);

            if (response.status === 401) {
                const refreshUrl = "http://localhost:8000/api/token/refresh/";
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: { refresh: refreshToken },
                };
                // Access token has expired, use the refresh token to get a new access token
                const { refreshResponse } = useFetch(refreshUrl, options);
                if (!refreshResponse.ok) {
                    throw new Error(`HTTP Error ${refreshResponse.status}`);
                }
                const newAccessToken = refreshResponse.access;
                const newRefreshToken = refreshResponse.refresh;

                setAccessToken(newAccessToken);
                setRefreshToken(newRefreshToken);

                localStorage.setItem("access", JSON.stringify(accessToken));
                localStorage.setItem("refresh", JSON.stringify(refreshToken));
            } else if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}`);
            }
        } catch (error) {
            console.error("Error", error);
        }
    };
};
