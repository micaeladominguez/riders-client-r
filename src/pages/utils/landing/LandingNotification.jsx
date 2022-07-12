import React from "react";
import  '../errors/ErrorAlreadyInRide.css';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
const LandingNotification = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate('/home');
        window.location.reload();
    }
    const cancelRide = () => {
       navigate('/history');
        window.location.reload();
    }
    return (
        <div className="container-error">
            <div className="error-page">
                <div className="headerError"> <div>
                    You Accept a Ride!
                </div></div>
                <div className="content-text"> Thanks for using rider's</div>
            </div>
            <div className="options">
                <div className="content-text"> Your options</div>
                <div className="buttons-error">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 1, marginRight:2,ackgroundColor: '#e53935', color: 'white' 	}}
                        onClick={() => home()}> Back Home </Button>
                    <div className="or-option"> or </div>
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={() => cancelRide()}
                        sx={{ mt: 1, backgroundColor: '#e53935', color: 'white'	}}
                    > History </Button>
                </div>
            </div>
        </div>


    );
}
export default LandingNotification;