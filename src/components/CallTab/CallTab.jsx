import * as React from 'react';
import Typography from '@mui/material/Typography';
import "./CallTab.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Modal, SvgIcon} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import Avatar from "@mui/material/Avatar";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import {CallCard} from "../CallCard/CallCard";
const CallTab = ({call}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const date = new Date(call.date);
    const user = JSON.parse(window.localStorage.getItem('rider'));
    return(
        <div className="flex">
            <button onClick={ handleOpen} className="card-bottom"  >
                <div className="header-2">
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
                </div>
                <div className="all-grid-tab">
                    <div className="info-tab">
                        <div className="fieldsShort">
                            <div className="components-img-2">
                                <SvgIcon component={AttachMoneyIcon} />
                            </div>
                            <div className="components-field-2">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Price
                                </Typography>
                                <Typography  >
                                    { call.priceInCents}
                                </Typography>
                            </div>
                        </div>
                        <div className="fieldsShort">
                            <div className="components-img-2">
                                <SvgIcon component={CalendarTodayIcon} />
                            </div>
                            <div className="components-field-2">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Date
                                </Typography>
                                <Typography  >
                                    {date.toString().slice(0,15)}
                                </Typography>
                            </div>
                        </div>
                        <div className="fieldsShort">
                            <div className="components-img-2">
                                <SvgIcon component={DescriptionIcon} />
                            </div>
                            <div className="components-field-2">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Description
                                </Typography>
                                <Typography  >
                                    {call.description}
                                </Typography>
                            </div>
                        </div>
                    </div>

                </div>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CallCard call={call} onClose={handleClose} />
            </Modal>
        </div>



    );
}

export default CallTab;