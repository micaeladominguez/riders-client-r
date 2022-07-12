import * as React from "react";
import {useEffect, useState} from "react";
import Loading from "../utils/loading/Loading";
import Filter from "./Filter";
import {NavBar} from "../../components/NavBar/NavBar";
import {useNavigate} from "react-router-dom";
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
    const navigate = useNavigate();

    useEffect(() => {
        console.log(window.localStorage.getItem('token'))
        if(!window.localStorage.getItem('token')){
            navigate('/');
        }
        getLocation();
    }, []);
    return (
        <div className="home-page">
            <NavBar />
            {(status === "Locating..." || lat === null || lng === null) && <Loading /> }
            {(status === "Ok" && lat !== null && lng !== null) && ( <Filter address={{lat: lat, lng: lng}}   />)}
        </div>
    )
}
export default HomePage;