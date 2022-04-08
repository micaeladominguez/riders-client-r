import React from "react";
import './ErrorAlreadyInRide.css';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
const ErrorAlreadyInRide = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate('/home');
    }
    const activeRide = () => {
        navigate('/ActualRide');
    }
    return (
        <div className="container-error">
            <div className="error-page">
                <div className="headerError"> <div>
                    Oops!
                </div></div>
                <div className="content-text"> You are already in a ride</div>
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
                        onClick={() => activeRide()}
                        sx={{ mt: 1, backgroundColor: '#e53935', color: 'white'	}}
                    > Actual Ride </Button>
                </div>
            </div>
        </div>


    );
}
export default ErrorAlreadyInRide;