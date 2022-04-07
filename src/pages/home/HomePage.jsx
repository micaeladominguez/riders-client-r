import {NavBar} from "/home/mica/faculty/lab1/riders-client-r/src/components/NavBar/NavBar.jsx";
import CallTab from "../../components/CallTab/CallTab";
import * as React from "react";
import {useEffect, useState} from "react";
import {GET_CALLS, LOGIN_RIDER} from "../../util/queries/sessionQueries";
import Loading from "../utils/loading/Loading";
import {useQuery} from "@apollo/client";
import ErrorData from "../utils/errors/ErrorData";
const HomePage = () => {

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
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [calls, setCalls] = useState(null);
    const { loading, data, error } = useQuery(GET_CALLS, {variables: {lat: lat, long: lng}, onCompleted:(data)=>{
            if(data) {
                setCalls( {...(data)} )
            }
        }})
    const getLocation = () => {
        let status = null;
        if (!navigator.geolocation) {
            status ='Geolocation is not supported by your browser';
        } else {
            if(lat === null || lng === null){
                status= 'Locating...';
            }else{
                status = null;
            }
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                status= 'Unable to retrieve your location';
            });
        }
        setStatus(status)
    }
    const getCalls = () =>{
        if(data) {
            setCalls(data);
        }
        if (loading){
           setCalls(null);
        }
        if (error) return `Error! ${error}`;
    }
    useEffect(() => {
        getLocation();
    });

    return (
        <div>

            <NavBar />
            {status === "Locating..." && <Loading /> }
            {data && data.getAvailableCalls.length > 0 && (
                data.getAvailableCalls.map((call) => (
                    <CallTab call={call} />
                ))
            )
            }
            {data && data.getAvailableCalls.length === 0 && <ErrorData />}
            {!data && <ErrorData />}
        </div>
    )
}
export default HomePage;