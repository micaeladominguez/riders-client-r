import {NavBar} from "/home/mica/faculty/lab1/riders-client-r/src/components/NavBar/NavBar.jsx";
import * as React from "react";
import ErrorAlreadyInRide from "../utils/errors/ErrorAlreadyInRide";
const ErrorPage = () => {
    return (
        <div>
            <NavBar />
            <ErrorAlreadyInRide />
        </div>
    )
}
export default ErrorPage;