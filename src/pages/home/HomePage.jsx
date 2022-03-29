import {NavBar} from "/home/mica/faculty/lab1/riders-client-r/src/components/NavBar/NavBar.jsx";
import CallTab from "../../components/CallTab/CallTab";
import * as React from "react";
const HomePage = () => {
    const pages = [
        {call: {
            callerName: "CallerName",
            addressAndHour: "ADDRESS AND HOUR",
            description: "description"
        }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description"
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description"
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description"
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description"
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description"
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description"
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description"
            }}]
    return (
        <div>
            <NavBar />
            {pages.map((page) => (
                    <CallTab call={page.call} />
                ))}
        </div>
    )
}
export default HomePage;