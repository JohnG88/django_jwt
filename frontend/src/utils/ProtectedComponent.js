import React, { useContext } from "react";
import useAuthC from "./useAuthC";
//import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const ProtectedComponent = ({ children, ...rest }) => {
    let { user } = useContext(AuthContext);

    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const accessToken = localStorage.getItem("access");

    //const { isAuthenticated } = useAuthC();
    //const isAuthenticated = useAuthC();
    //console.log("protected auth", isAuthenticated);
    //const routes = useRoutes(rest);

    //if (!accessToken) {
    //    setIsAuthenticated(false);
    //} else {
    //    setIsAuthenticated(true);
    //}

    //useEffect(() => {
    //    if (!isAuthenticated) {
    //        window.location.href = "/login";
    //    }
    //}, [isAuthenticated]);

    //if (!isAuthenticated) {
    //    return <Navigate to="/login" />;
    //}

    return user ? children : <Navigate to="/login" />;
};

export default ProtectedComponent;
