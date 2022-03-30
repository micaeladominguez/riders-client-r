import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CallTab.css";
import {CallContext} from "../../App";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
const CallTab = (callTab) => {
    const { actualCall, setActualCall} = useContext(CallContext);
    const navigate = useNavigate()
    const handleClick = () => {

    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setActualCall(callTab);
        navigate('/card')
    };
    return(
        <div  style={{border: '1px solid #E8E6E0', marginTop: 1.5, borderRadius: '5%'}} >
            <div className="all-grid">
                <Typography sx={{ fontSize: 14, alignItems: 'centre', marginTop: 1 }} color="text.secondary" gutterBottom>
                    {callTab.call.price}
                </Typography>
                <Typography variant="h5" component="div">
                    {callTab.call.addressAndHour}
                </Typography>
                <Typography variant="body2">
                    {callTab.call.description}
                </Typography>
            </div>
            <div className="all-grid">
                <div className="flex-container">
                    <Button
                        onClick= {() => handleClick()}
                        variant="contained"
                        sx={{ mt: 3, mb: 2, marginLeft:2	}}> Accept Ride </Button>
                    <Button
                        onClick= {() => handleSubmit}
                        sx={{ mt: 3, mb: 2, marginRight:2	}}
                    > See more fields  </Button>
                </div>
            </div>
        </div>

    );
}

export default CallTab;