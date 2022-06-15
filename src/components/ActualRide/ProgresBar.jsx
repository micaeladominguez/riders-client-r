import './ProgressBar.css';
import {LinearProgress, SvgIcon} from "@mui/material";

import * as React from "react";
import {Box} from "@mui/system";
import Avatar from "@mui/material/Avatar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {useQuery} from "@apollo/client";
import {GET_RIDER, GET_RIDES} from "../../util/queries/sessionQueries";
import {useState} from "react";
const ProgressBar = ({status}) => {
    const [user, setUser]= useState(null)
    const { loading, data, error } =  useQuery(GET_RIDER, {variables: {},onCompleted :(data)=>{
            if(data) {
                setUser( data)
            }
        }});
    return (
        <div className="container-4">
            {data  && <div className="container-4">
                {status === 0 &&
                    <div className="first">
                        {(() => {
                            switch (data.getRider.vehicle.type) {
                                case 'motorcycle':   return <div className="icon-pb-first" >
                                    <Avatar  component={TwoWheelerIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                                </div>;
                                case 'car' :
                                    return <div className="icon-pb-first">
                                        <Avatar  component={DirectionsCarIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                                    </div>;
                                case 'bicycle':
                                    return <div className="icon-pb-first" >
                                        <Avatar  component={PedalBikeIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                                    </div>;
                                case 'van':
                                    return <div className="icon-pb-first">
                                        <Avatar  component={AirportShuttleIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }} />
                                    </div>;
                                default:    return  <div className="icon-pb-first">
                                    <Avatar  component={TwoWheelerIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                                </div>;
                            }
                        })()}
                        <div className="container-4">
                            <div className="info" style={{marginRight:8}}>

                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress sx={{backgroundColor:'#D3D3D3'}} />
                                </Box>
                                <div className="text">
                                    Starting
                                </div>
                            </div>
                            <div className="info" >
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress  value={0}  variant="determinate" sx={{backgroundColor:'#D3D3D3'}} />
                                </Box>
                                <div className="text">
                                    Delivering
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {status === 1 &&
                    <div className="last">
                        {(() => {
                            switch (data.getRider.vehicle.type) {
                                case 'motorcycle':   return <div className="icon-pb-last" >
                                    <Avatar  component={TwoWheelerIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                                </div>;
                                case 'car' :
                                    return <div className="icon-pb-last">
                                        <Avatar  component={DirectionsCarIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                                    </div>;
                                case 'bicycle':
                                    return <div className="icon-pb-last" >
                                        <Avatar  component={PedalBikeIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                                    </div>;
                                case 'van':
                                    return <div className="icon-pb-last">
                                        <Avatar  component={AirportShuttleIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }} />
                                    </div>;
                                default:    return  <div className="icon-pb-last" >
                                    <Avatar  component={TwoWheelerIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                                </div>;
                            }
                        })()}
                        <div className="container-4">
                            <div className="info" style={{marginRight:8}}>
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress  value={100}  variant="determinate" sx={{backgroundColor:'#D3D3D3'}} />
                                </Box>
                                <div className="text">
                                    Starting
                                </div>
                            </div>
                            <div className="info" >
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress  sx={{backgroundColor:'#D3D3D3'}} />
                                </Box>
                                <div className="text">
                                    Delivering
                                </div>
                            </div>

                        </div>
                    </div>

                }
                {status >= 2 &&
                    <div className="middle">
                        <div >
                            <Avatar  component={DoneAllIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
                        </div>
                        <div className="container-4">
                            <div className="info" style={{marginRight:8}}>
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress  value={100}  variant="determinate" sx={{backgroundColor:'#D3D3D3'}} />
                                </Box>
                                <div className="text">
                                    Starting
                                </div>
                            </div>
                            <div className="info" >
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress value={100}  variant="determinate" sx={{backgroundColor:'#D3D3D3'}} />
                                </Box>
                                <div className="text">
                                    Delivering
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            }


        </div>
    )
}
export default ProgressBar;