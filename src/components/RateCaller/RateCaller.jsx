import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {RATE_CALLER} from "../../util/queries/sessionQueries";
import * as React from "react";
import {FormControl, InputLabel, OutlinedInput, SvgIcon} from "@mui/material";
import "./RateCaller.css";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from "@mui/material/Avatar";
import GradeIcon from '@mui/icons-material/Grade';
import {useState} from "react";
import {Star} from "@mui/icons-material";
import {Box} from "@mui/system";


export const RateCaller = ({onClose}) => {
    const [rateCallerMutation, {data, loading, error}] = useMutation(RATE_CALLER);
    const navigate = useNavigate();
    const rideId = window.localStorage.getItem('rideId');
    const home = () => {
        onClose();
    }
    const [errorMessage, setErrorMessage] = useState('')
    const labelStyle = {
        display: 'block',
        color: 'red',
    };
    const [stars, setStars] = React.useState('');
    const rateCaller = () =>{
        const response = rateCallerMutation({variables: {rideId:rideId, stars:parseInt(stars)}});
        navigate('/home');
        window.location.reload();
    }
    const getClassName = (starNumber) => {
        let className = 'rating-star';
        className += stars >= starNumber ? ' rating-star-selected' : '';
        return className;
    }
    const handleChange =() => (event) => {
        const possibleStars= parseInt(event.target.value);
        if(possibleStars < 0 || possibleStars > 5){
            setStars(event.target.value );
            setErrorMessage('Plis enter a number from 0 to 5');
        }else{
            setErrorMessage('');
            setStars(event.target.value );
        }
    };
    return(
        <div>
            <div className="rateCallerRap">
                <div className="headerCaller">
                    <button className="back-home-button-caller" onClick={()=> home()}>
                        <SvgIcon component={ArrowBackIcon} sx={{marginLeft:2, color:'white'}} />
                    </button>
                </div>
                <div className="fields-caller">
                    <div >
                        <Avatar  component={GradeIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                    </div>
                    <div className="bar-field">
                        <div className="info-field">
                            <strong> Rate Caller from 0 to 5</strong>
                        </div>
                    </div>
                    <Box className={'rating-selector-container'}>
                        <div>
                            <Star className={getClassName(1)} onClick={() => setStars(1)}/>
                            <Star className={getClassName(2)} onClick={() => setStars(2)}/>
                            <Star className={getClassName(3)} onClick={() => setStars(3)}/>
                            <Star className={getClassName(4)} onClick={() => setStars(4)}/>
                            <Star className={getClassName(5)} onClick={() => setStars(5)}/>
                        </div>
                    </Box>
                </div>
                <div className="buttons-caller">
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={() => rateCaller()}
                        sx={{ mt: 2, mb: 2, backgroundColor: '#e53935', color: 'white', width:'60%'	}}
                    > Send </Button>
                </div>
                <div className="error-field-caller">
                    <label style={labelStyle} id='passwordLabel'>{errorMessage}</label>
                </div>
            </div>
        </div>
    );

}
