import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import "./CallCard.css";
import GradeIcon from '@mui/icons-material/Grade';
import { SvgIcon} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {useContext} from "react";
import {CallContext} from "../../App";

export const CallCard = () => {
    const call = JSON.parse(window.localStorage.getItem('call'));
    //const call = useContext(CallContext);
   /* const actualCall = {
        call: {
            grade: 5,
            callerName: "CallerName",
            addressAndHour: "ADDRESS AND HOUR",
            description: "Longggggggggggg" +
                "gggggggggg description",
            price: "100$",
        }
    }*/
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="nothing"></div>
                <div className="other">
                    <div className="header"> More about this call</div>
                    <div className="fields">
                        <div className="components">
                            <div className="components-img">
                                <SvgIcon component={TrendingUpIcon} />
                            </div>
                            <div className="components-field" sx={{marginTop:2}}>
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Rating
                                </Typography>
                                {(() => {
                                    switch (call.callerRatingStars) {
                                        case 1:   return <div className="components-img">
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        case 2: return <div className="components-img">
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        case 3:  return <div className="components-img">
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        case 4: return <div className="components-img">
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        case 5: return <div className="components-img">
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        default:     return <div className="components-img">
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                    }
                                })()}
                            </div>
                            </div>
                            <div className="components">
                                <div className="components-img">
                                    <SvgIcon component={AttachMoneyIcon} />
                                </div>
                                <div className="components-field">
                                    <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                     Price
                                    </Typography>
                                    <Typography  >
                                        { call.priceInCents}
                                    </Typography>
                                </div>
                            </div>
                            {/*<div className="components">
                                <div className="components-img">
                                    <SvgIcon component={QueryBuilderIcon} />
                                </div>
                                <div className="components-field">
                                    <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                        Hour
                                    </Typography>
                                    <Typography  >
                                        {call.call.addressAndHour}
                                    </Typography>
                                </div>
                            </div>*/}
                            <div className="components">
                                <div className="components-img">
                                    <SvgIcon component={LocationOnIcon} />
                                </div>
                                <div className="components-field">
                                    <Typography  sx={{ fontWeight: "bold", display:"flex"}}>
                                        Starting Address
                                    </Typography>
                                    <Typography  >
                                        {call.startLocation.address}
                                    </Typography>
                                </div>
                            </div>
                            <div className="components">
                                <div className="components-img">
                                    <SvgIcon component={LocationOnIcon} />
                                </div>
                                <div className="components-field">
                                    <Typography  sx={{ fontWeight: "bold", display:"flex"}}>
                                        Finish Address
                                    </Typography>
                                    <Typography  >
                                        {call.finishLocation.address}
                                    </Typography>
                                </div>
                            </div>
                            <div className="components" style={{marginBottom:20}}>
                                <div className="components-img">
                                    <SvgIcon component={DescriptionIcon} />
                                </div>
                                <div className="components-field">
                                    <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                        Description
                                    </Typography>
                                    <Typography  >
                                        {call.description}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    <div className="buttons">
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#e53935', color: 'white'	}}
                        > Accept Ride </Button>
                        <Button
                            type="submit"
                            sx={{ mt: 3, mb: 2, backgroundColor: 'white', color: '#e53935'	}}
                            onClick={() => navigate("/home")}> Back Home </Button>
                    </div>
                    </div>
        </div>

    );

}