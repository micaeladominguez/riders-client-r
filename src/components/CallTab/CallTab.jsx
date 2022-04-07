import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CallTab.css";
import {useNavigate} from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {SvgIcon} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import {useContext} from "react";
import {CallContext} from "../../App";
import callCardPage from "../../pages/callCard/CallCardPage";
const CallTab = (callTab) => {
    const navigate = useNavigate()
    const { setCall} = useContext(CallContext);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        window.localStorage.setItem('call', JSON.stringify(callTab.call))
        setCall(
            callTab.call
        )
        navigate('/card')
    };
    const handleRideAcceptance = () => {
        navigate('/')
    }
    return(
        <button onClick={ handleSubmit} style={{border: '1px solid #E8E6E0', marginTop: 1.5, borderRadius: '5%', backgroundColor:"white", width:'100%'}}>
                <div className="all-grid-tab">
                    <div className="header-2">POSSIBLE CALL</div>
                    <div className="fieldsShort">
                        <SvgIcon component={AttachMoneyIcon} sx={{marginLeft:9}}/>
                        <Typography sx={{ fontSize: 14, alignItems: 'centre', marginTop: 1, marginRight:9 }} color="text.secondary" gutterBottom>
                            {callTab.call.priceInCents}
                        </Typography>
                    </div>
                    <div className="fieldsShort">
                        <SvgIcon component={DescriptionIcon} sx={{marginLeft:9}}/>
                        <Typography variant="body2" sx={{ fontSize: 14, alignItems: 'centre', marginTop: 1, marginRight:9 }}>
                            {callTab.call.description}
                        </Typography>
                    </div>

                </div>
                <div className="all-grid-tab">
                    <div className="flex-container">
                        <Button
                            variant="contained"
                            onClick={handleRideAcceptance()}
                            sx={{ mt: 3, mb: 2, marginLeft:2	}}> Accept Ride </Button>
                    </div>
                </div>
        </button>


    );
}

export default CallTab;