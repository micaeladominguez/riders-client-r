import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import "./CallCard.css";
import GradeIcon from '@mui/icons-material/Grade';
import {IconButton, SvgIcon} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {useContext, useEffect} from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Avatar from "@mui/material/Avatar";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import {useMutation} from "@apollo/client";
import {ACCEPT_CALL} from "../../util/queries/sessionQueries";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const CallCard = ({call, onClose}) => {
    const date = new Date(call.date);
    const [acceptRideMutation, {data, loading, error}] = useMutation(ACCEPT_CALL);
    const navigate = useNavigate();
    const user = JSON.parse(window.localStorage.getItem('rider'));
    const home = () => {
        onClose();
    }
    const acceptRide = () =>{
        const response = acceptRideMutation({variables: {callId:call.id}});
        navigate('/notification');
    }

    useEffect(()=>{
        console.log('call', call);
        console.log(onClose);
        if(call.id === ""){
            home()
        }
    },[])
    const errorPage = () => {
        navigate('/errorPage');
    }
    return (
        <div>
            {
                error && errorPage()
            }
            { !error && call.id !== "" &&
                <div className="other">
                    <div className="header-2">
                        <button className="back-home-button" onClick={()=> home()}>
                            <SvgIcon component={ArrowBackIcon} sx={{marginLeft:2, color:'white'}} />
                        </button>

                        <div className="header-icons">
                            {(() => {
                                switch (user.vehicle.type) {
                                    case 'motorcycle':   return <div >
                                        <Avatar  component={TwoWheelerIcon} sx={{ bgcolor: "#ee2738", width:50, height:50 }} variant="circular" />
                                    </div>;
                                    case 'car' :
                                        return <div >
                                            <Avatar  component={DirectionsCarIcon} sx={{ bgcolor: "#ee2738", width:50, height:50 }} variant="circular" />
                                        </div>;
                                    case 'bicycle':
                                        return <div >
                                            <Avatar  component={PedalBikeIcon} sx={{ bgcolor: "#ee2738", width:50, height:50 }} variant="circular" />
                                        </div>;
                                    case 'van':
                                        return <div >
                                            <Avatar  component={AirportShuttleIcon} sx={{ bgcolor: "#ee2738", width:50, height:50 }} variant="circular" />
                                        </div>;
                                    default:    return  <div >
                                        <Avatar  component={TwoWheelerIcon} sx={{ bgcolor: "#ee2738", width:50, height:50 }} variant="circular" />
                                    </div>;
                                }
                            })()}
                            <div className="header-3">More about this ride</div>
                        </div>

                    </div>
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
                            onClick={() => acceptRide()}
                            sx={{ mt: 2, mb: 2, backgroundColor: '#e53935', color: 'white', width:'60%'	}}
                        > Accept Ride </Button>
                    </div>

            </div>
        }
        </div>


    );

}