import {NavBar} from "/home/mica/faculty/lab1/riders-client-r/src/components/NavBar/NavBar.jsx";
import CallTab from "../../components/CallTab/CallTab";
import * as React from "react";
const HomePage = () => {
    const pages = [1,2,3,4,5]
    return (
        <div>
            <NavBar />
            {pages.map((page) => (
                    <CallTab />
                ))}



        </div>
    )
}
export default HomePage;