import Tooltip from '@mui/material/Tooltip';
import './ProgressBar.css';
import {LinearProgress, SvgIcon} from "@mui/material";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as React from "react";
import {Box} from "@mui/system";

const ProgressBar = ({status}) => {
    return (
        <div className="container-4">
                {status === 0 &&
                    <div className="container-4">
                        <Tooltip title="Accept call">
                            <div className="circle-completed">
                                <SvgIcon component={BookmarkAddedIcon}  style={{width: '4vw',
                                    height: '4vh', color: 'white'}}/>
                            </div>
                        </Tooltip>
                        <Tooltip title="Riding to the next address">
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress variant="determinate" value={0} className="line-not-completed" />
                            </Box>
                        </Tooltip>
                       <Tooltip title="Doing the task in the first address">
                           <div className="circle-not-completed">
                               <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                   height: '4vh', color: 'black'}}/>
                           </div>
                       </Tooltip>
                        <Tooltip title="Riding to the next address">
                            <Box sx={{ width: '100%', mr: 1, backgroundColor:'white' , margin:0}}>
                                <LinearProgress variant="determinate" value={0} className="line-not-completed" />
                            </Box>
                        </Tooltip>
                        <Tooltip title="Doing the task in the second address">
                            <div className="circle-not-completed">
                                <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                    height: '4vh', color: 'black'}}/>
                            </div>
                        </Tooltip>
                    </div>
                }
            {status === 1 &&
                <div className="container-4">
                    <Tooltip title="Accept call">
                        <div className="circle-completed">
                            <SvgIcon component={BookmarkAddedIcon}  style={{width: '4vw',
                                height: '4vh', color: 'white'}}/>
                        </div>
                    </Tooltip>
                    <Tooltip title="Arrived to the first address">
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" value={100} className="line-not-completed" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Doing the task in the first address">
                        <div className="circle-not-completed">
                            <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                height: '4vh', color: 'black'}}/>
                        </div>
                    </Tooltip>
                    <Tooltip title="Riding to the next address">
                        <Box sx={{ width: '100%', mr: 1, backgroundColor:'white' , margin:0}}>
                            <LinearProgress variant="determinate" value={0} className="line-not-completed" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Doing the task in the second address">
                        <div className="circle-not-completed">
                            <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                height: '4vh', color: 'black'}}/>
                        </div>
                    </Tooltip>
                </div>
            }
            {status === 2 &&
                <div className="container-4">
                    <Tooltip title="Accept call">
                        <div className="circle-completed">
                            <SvgIcon component={BookmarkAddedIcon}  style={{width: '4vw',
                                height: '4vh', color: 'white'}}/>
                        </div>
                    </Tooltip>
                    <Tooltip title="Arrived to the first address">
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" value={100} className="line-not-completed" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Finish the task in the first address">
                        <div className="circle-completed">
                            <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                height: '4vh', color: 'white'}}/>
                        </div>
                    </Tooltip>
                    <Tooltip title="Riding to the next address">
                        <Box sx={{ width: '100%', mr: 1, backgroundColor:'white' , margin:0}}>
                            <LinearProgress variant="determinate" value={0} className="line-not-completed" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Doing the task in the second address">
                        <div className="circle-not-completed">
                            <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                height: '4vh', color: 'black'}}/>
                        </div>
                    </Tooltip>
                </div>
            }
            {status === 3 &&
                <div className="container-4">
                    <Tooltip title="Accept call">
                        <div className="circle-completed">
                            <SvgIcon component={BookmarkAddedIcon}  style={{width: '4vw',
                                height: '4vh', color: 'white'}}/>
                        </div>
                    </Tooltip>
                    <Tooltip title="Arrived to the first address">
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" value={100} className="line-not-completed" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Finish the task in the first address">
                        <div className="circle-completed">
                            <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                height: '4vh', color: 'white'}}/>
                        </div>
                    </Tooltip>
                    <Tooltip title="Arrived to the first address">
                        <Box sx={{ width: '100%', mr: 1, backgroundColor:'white' , margin:0}}>
                            <LinearProgress variant="determinate" value={100} className="line-not-completed" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Doing the task in the second address">
                        <div className="circle-not-completed">
                            <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                height: '4vh', color: 'black'}}/>
                        </div>
                    </Tooltip>
                </div>
            }
            {status >= 4 &&
                <div className="container-4">
                    <Tooltip title="Accept call">
                        <div className="circle-completed">
                            <SvgIcon component={BookmarkAddedIcon}  style={{width: '4vw',
                                height: '4vh', color: 'white'}}/>
                        </div>
                    </Tooltip>
                    <Tooltip title="Arrived to the first address">
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" value={100} className="line-not-completed" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Finish the task in the first address">
                        <div className="circle-completed">
                            <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                height: '4vh', color: 'white'}}/>
                        </div>
                    </Tooltip>
                    <Tooltip title="Arrived to the first address">
                        <Box sx={{ width: '100%', mr: 1, backgroundColor:'white' , margin:0}}>
                            <LinearProgress variant="determinate" value={100} className="line-not-completed" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Finish the task in the second address">
                        <div className="circle-completed">
                            <SvgIcon component={LocationOnIcon}  style={{width: '4vw',
                                height: '4vh', color: 'white'}}/>
                        </div>
                    </Tooltip>
                </div>
            }
        </div>
    )
}
export default ProgressBar;