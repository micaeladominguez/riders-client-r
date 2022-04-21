import * as React from "react";
import ErrorAlreadyInRide from "../utils/errors/ErrorAlreadyInRide";
import {NavBar} from "../../components/NavBar/NavBar";
const ErrorPage = () => {
    return (
        <div>
            <NavBar />
            <ErrorAlreadyInRide />
        </div>
    )
}
export default ErrorPage;