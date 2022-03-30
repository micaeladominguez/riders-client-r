import {NavBar} from "/home/mica/faculty/lab1/riders-client-r/src/components/NavBar/NavBar.jsx";
import CallTab from "../../components/CallTab/CallTab";
import {useQuery} from "@apollo/client";
import {GET_CALLS} from "../../util/queries/sessionQueries";
import * as React from "react";
const HomePage = () => {
    const {data, loading} = useQuery(GET_CALLS)
    const pages = (data) ? data.calls : [];

    const pagesAux = [
        {call: {
            callerName: "CallerName",
            addressAndHour: "ADDRESS AND HOUR",
            description: "description",
            price: "100$",
        }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description",
                price: "100$",
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description",
                price: "100$",
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description",
                price: "100$",
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description",
                price: "100$",
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description",
                price: "100$",
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description",
                price: "100$",
            }},
        {call: {
                callerName: "CallerName",
                addressAndHour: "ADDRESS AND HOUR",
                description: "description",
                price: "100$",
            }}]
    return (
        <div>
            <NavBar />
            {pagesAux.map((page) => (
                    <CallTab call={page.call} />
                ))}
        </div>
    )
}
export default HomePage;