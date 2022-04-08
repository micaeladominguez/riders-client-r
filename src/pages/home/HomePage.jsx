import {NavBar} from "/home/mica/faculty/lab1/riders-client-r/src/components/NavBar/NavBar.jsx";
import * as React from "react";
import {useEffect, useState} from "react";
import Loading from "../utils/loading/Loading";
import Tab from "./Tab";
import {useQuery} from "@apollo/client";
import {GET_RIDER} from "../../util/queries/sessionQueries";
import Filter from "./Filter";
const HomePage = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                if(position.coords.latitude === null || position.coords.longitude === null){
                    setStatus('Locating...');
                }else{
                   setStatus('Ok');
                }
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    useEffect(() => {
        getLocation();
    }, []);
    const { loading, data, error } =  useQuery(GET_RIDER, { onCompleted:(data)=>{
            if(data) {
                window.localStorage.setItem('rider', JSON.stringify(data.getRider))
            }
        }});
    return (
        <div>
            <NavBar />
            {(status === "Locating..." || lat === null || lng === null) && <Loading /> }
            {(status === "Ok" && lat !== null && lng !== null) && <Filter address={{lat: lat, lng: lng}}  />}

        </div>
    )
}
export default HomePage;