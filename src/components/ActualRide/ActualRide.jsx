import {Button, FormControl, InputLabel, LinearProgress, OutlinedInput, SvgIcon, Tooltip} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Typography from "@mui/material/Typography";
import GradeIcon from "@mui/icons-material/Grade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import './ActualRide.css';
import * as React from "react";
import ProgressBar from "./ProgresBar";
import Loading from "../../pages/utils/loading/Loading";
import KeyIcon from '@mui/icons-material/Key';
import {useLazyQuery, useMutation} from "@apollo/client";
import {
    FINISH_RIDE,
    GET_ACTIVE_RIDE,
    REGISTER_RIDER,
    UPDATE_RIDER_FIRST_LOCATION
} from "../../util/queries/sessionQueries";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export const ActualRide = () => {
    const [status, setStatus] = React.useState(0);
    const [actualRide, setActualRide] = React.useState(null);
    const [getActualRide, { loading, data, error }] =  useLazyQuery(GET_ACTIVE_RIDE);
    const [values, setValues] = React.useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const setter = async () => {
        const actualRideResponse = await getActualRide();
        if (actualRideResponse){
            setActualRide(actualRideResponse.data.getActiveRide);
            if(actualRideResponse.data.getActiveRide.riderArrivedStartLocation === true){
                setStatus(1);
            }
        }
    }
    const navigate = useNavigate();
    const handleChange =() => (event) => {
        setErrorMessage('');
        setValues(event.target.value );
    };
    const [arrivedMutation] = useMutation(UPDATE_RIDER_FIRST_LOCATION , {
        onCompleted: (res) => {
            if(res.data){
                setActualRide(res.data.updateRiderArrivedFirstLocation);
            }

        },
    })
    const [finishRide] = useMutation(FINISH_RIDE , {
        onError: (e) => setErrorMessage(e.message),
        onCompleted: (res) => {
            if(res.data){
                setActualRide(res.data.finishRide);
            }
            navigate('/landingF');
        },
    })

    const labelStyle = {
        display: 'block',
        color: 'red',
    };
    const arrivedToFirstAddress = async () => {
        const arrived = await arrivedMutation();
        setStatus(status + 1);
    }
    const finishRideBottom = async () => {
        if(values === ''){
            setErrorMessage('Please enter a DNI');
        }else{
            const response = await finishRide({variables:{callerDNI: parseInt(values)}});
        }


    }
    const refresh = () => {
        window.location.reload();
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
                actualRide !== null && status !== 2 &&
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
                            {status === 0 && <Button variant="contained"  style={{ width:'100%', backgroundColor: '#008000'}} onClick={() => arrivedToFirstAddress()}>I arrived to the starting address</Button>}
                            {status === 1 && <Button variant="contained"  style={{ width:'100%', backgroundColor: '#008000'}} onClick={() => setStatus(status + 1)}>I arrived to the last address</Button>}
                            <Button variant="contained" color="error" style={{ width:'100%'}}>Cancel Ride</Button>
                        </div>
                    </div>
                </div>
            }
            {
                actualRide !== null && status === 2 && actualRide.active === true &&
                <div className="info-dni">
                    <div className="field-requirement">
                        <div >
                            <Avatar  component={KeyIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                        </div>
                        <div className="bar-field">
                            <div className="info-field">
                                <strong> FOR CHECKING IF IT'S CORRECTLY DELIVERED  PLEASE ENTER
                                THE FIELD REQUIRED!</strong>
                            </div>
                        </div>
                        <FormControl fullWidth margin="normal" sx={{mt: 1}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">DNI FROM CALLER</InputLabel>
                            <OutlinedInput
                                required
                                id="dni"
                                type='number'
                                value={values}
                                onChange={handleChange()}
                                label="DNI FROM CALLER"
                            />
                        </FormControl>

                        <div className='update-button'>
                            <Button variant="contained"  style={{ width:'100%', backgroundColor: '#ee2738'}} onClick={() => finishRideBottom()}>SUBMIT</Button>
                        </div>
                        <div className="error-field">
                            <label style={labelStyle} id='passwordLabel'>{errorMessage}</label>
                        </div>

                    </div>
                </div>
            }

        </div>
    );

}
export default ActualRide;