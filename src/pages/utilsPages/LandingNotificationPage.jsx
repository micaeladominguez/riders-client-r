import * as React from "react";
import LandingNotification from "../utils/landing/LandingNotification";
import {NavBar} from "../../components/NavBar/NavBar";
const LandingNotificationPage = () => {
    return (
        <div>
            <NavBar />
            <LandingNotification />
        </div>
    )
}
export default LandingNotificationPage;