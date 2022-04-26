import {Button, LinearProgress, SvgIcon, Tooltip} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Typography from "@mui/material/Typography";
import GradeIcon from "@mui/icons-material/Grade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import './ActualRide.css';
import * as React from "react";
import ProgressBar from "./ProgressBar";
import Loading from "../../pages/utils/loading/Loading";
import {useLazyQuery} from "@apollo/client";
import {GET_ACTIVE_RIDE} from "../../util/queries/sessionQueries";
import {useEffect, useState} from "react";

export const ActualRide = () => {
    const [status, setStatus] = React.useState(0);
    const [actualRide, setActualRide] = useState(null);
    const [getActualRide, { loading, data, error }] =  useLazyQuery(GET_ACTIVE_RIDE);
    const setter = async () => {
        const actualRideResponse = await getActualRide();
        if (actualRideResponse){
            setActualRide(actualRideResponse.data.getActiveRide);
        }
    }
    useEffect(async () => {
        try{
            await setter();
        }catch (e){}
    },[]);
    return(
        <div>

            {actualRide === null && (<Loading />)}
            {
                actualRide !== null &&
                <div>
                    <div className="progress-bar">
                        < ProgressBar status={status}/>
                    </div>
                    <div className="card-items">
                        <div className="other-2">
                            <div className="fields">
                                <div className="components">
                                    <div className="components-img">
                                        <SvgIcon component={TrendingUpIcon} />
                                    </div>
                                    <div className="components-field" sx={{marginTop:2, marginBottom:0}}>
                                        <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                            Rating
                                        </Typography>
                                        {(() => {
                                            switch (actualRide.call.callerRatingStars) {
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
                                            { actualRide.call.priceInCents}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="components">
                                    <div className="components-img">
                                        <SvgIcon component={CalendarTodayIcon} />
                                    </div>
                                    <div className="components-field">
                                        <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                            Date
                                        </Typography>
                                        <Typography  >
                                            {(new Date(actualRide.date)).toString().slice(0,15)}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="components">
                                    <div className="components-img">
                                        <SvgIcon component={LocationOnIcon} />
                                    </div>
                                    <div className="components-field">
                                        <Typography  sx={{ fontWeight: "bold", display:"flex"}}>
                                            Starting Address
                                        </Typography>
                                        <Typography  >
                                            {actualRide.call.startLocation.address}
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
                                            {actualRide.call.finishLocation.address}
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
                                            {actualRide.call.description}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-buttons">
                        <div className='update-button'>
                            {status === 0 && <Button variant="contained"  style={{ width:'100%', backgroundColor: '#008000'}} onClick={() => setStatus(status + 1)}>I arrived to the starting address</Button>}
                            {status === 1 && <Button variant="contained"  style={{ width:'100%', backgroundColor: '#008000'}} onClick={() => setStatus(status + 1)}>I finish the task</Button>}
                            {status === 2 && <Button variant="contained"  style={{ width:'100%', backgroundColor: '#008000'}} onClick={() => setStatus(status + 1)}>I arrived to the last address</Button>}
                            {status >= 3 &&  <Button variant="contained"  style={{ width:'100%', backgroundColor: '#008000'}} onClick={() => setStatus(status + 1)}>Back Home</Button>}
                            <Button variant="contained" color="error" style={{ width:'100%'}}>Cancel Ride</Button>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
}
export default ActualRide;