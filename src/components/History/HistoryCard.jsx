import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "./HistoryCard.css";
import GradeIcon from '@mui/icons-material/Grade';
import { SvgIcon} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Avatar from "@mui/material/Avatar";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from "@mui/icons-material/Call";
export const HistoryCard = ({ride, onClose}) => {
    const date = new Date(ride.date);
    const navigate = useNavigate();
    const home = () => {
        onClose();
    }
    return (
        <div>
            {  ride.id !== "" &&
                <div className="other-history">
                    <div className="header-2-history">
                        <button className="back-home-button-history" onClick={()=> home()}>
                            <SvgIcon component={ArrowBackIcon} sx={{marginLeft:2, color:'white'}} />
                        </button>

                        <div className="header-icons-history">
                            <Avatar  component={CallIcon} sx={{ bgcolor: "#ee2738", width:50, height:50 }} variant="circular" />
                            <div className="header-3-history">More about this ride</div>
                        </div>

                    </div>
                    <div className="fields-history">
                        <div className="components-history">
                            <div className="components-img-history">
                                <SvgIcon component={DoneAllIcon} />
                            </div>
                            <div className="components-field-history">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Status
                                </Typography>
                                {!ride.active &&
                                    <Typography  >
                                        Finish
                                    </Typography>
                                }
                                {ride.active &&
                                    <Typography  >
                                        In progress
                                    </Typography>
                                }
                            </div>
                        </div>
                        <div className="components-history">
                            <div className="components-img-history">
                                <SvgIcon component={TrendingUpIcon} />
                            </div>
                            <div className="components-field-history" sx={{marginTop:2, marginBottom:0}}>
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Caller Rating
                                </Typography>
                                {(() => {
                                    switch (ride.call.callerRatingStars) {
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
                        <div className="components-history">
                            <div className="components-img-history">
                                <SvgIcon component={AttachMoneyIcon} />
                            </div>
                            <div className="components-field-history">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Price
                                </Typography>
                                <Typography  >
                                    { ride.call.priceInCents}
                                </Typography>
                            </div>
                        </div>
                        <div className="components-history">
                            <div className="components-img-history">
                                <SvgIcon component={CalendarTodayIcon} />
                            </div>
                            <div className="components-field-history">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Date
                                </Typography>
                                <Typography  >
                                    {date.toString().slice(0,15)}
                                </Typography>
                            </div>
                        </div>
                        <div className="components-history">
                            <div className="components-img-history">
                                <SvgIcon component={LocationOnIcon} />
                            </div>
                            <div className="components-field-history">
                                <Typography  sx={{ fontWeight: "bold", display:"flex"}}>
                                    Starting Address
                                </Typography>
                                <Typography  >
                                    {ride.call.startLocation.address}
                                </Typography>
                            </div>
                        </div>
                        <div className="components-history">
                            <div className="components-img-history">
                                <SvgIcon component={LocationOnIcon} />
                            </div>
                            <div className="components-field-history">
                                <Typography  sx={{ fontWeight: "bold", display:"flex"}}>
                                    Finish Address
                                </Typography>
                                <Typography  >
                                    {ride.call.finishLocation.address}
                                </Typography>
                            </div>
                        </div>
                        <div className="components-history" style={{marginBottom:20}}>
                            <div className="components-img-history">
                                <SvgIcon component={DescriptionIcon} />
                            </div>
                            <div className="components-field-history">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Description
                                </Typography>
                                <Typography  >
                                    {ride.call.description}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>


    );

}