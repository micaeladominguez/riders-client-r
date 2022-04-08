import {Button, LinearProgress, SvgIcon, Tooltip} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Typography from "@mui/material/Typography";
import GradeIcon from "@mui/icons-material/Grade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import './ActualRide.css';
import * as React from "react";
import logo from "../../assets/ridersLogo.png";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {Box} from "@mui/system";
export const ActualRide = ({actualRide}) => {
    const date = new Date(actualRide.call.date);
    return(
        <div>
            <div className="card-items">
                <Box width="100%" mr={3}>
                    <LinearProgress variant="determinate" value={50} />
                </Box>
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
                                    {date.toString().slice(0,15)}
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
                    <Button variant="contained" color="success" style={{ width:'100%'}}>I arrived to the starting address</Button>
                    <Button variant="contained" color="error" style={{ width:'100%'}}>Cancel Ride</Button>
                </div>
            </div>

        </div>
    );
}
export default ActualRide;