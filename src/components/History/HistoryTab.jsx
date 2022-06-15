import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {Modal, SvgIcon} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import CallIcon from "@mui/icons-material/Call";
import {HistoryCard} from "./HistoryCard";
import "./HistoryTab.css";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const HistoryTab = ({ride}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const date = new Date(ride.date);
    return(
        <div className="flex-history">
            <button onClick={ handleOpen} className="card-bottom-history"  >
                <div className="header-2-history">
                    <div className="header-2-history">
                        <Avatar  component={CallIcon} sx={{ bgcolor: "#ee2738", width:50, height:50 }} variant="circular" />
                    </div>
                </div>
                <div className="all-grid-tab-history">
                    <div className="fieldsShort-history">
                        <div className="components-img-2-history">
                            <SvgIcon component={DoneAllIcon} />
                        </div>
                        <div className="components-field-2-history">
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
                    <div className="info-tab-history">
                        <div className="fieldsShort-history">
                            <div className="components-img-2-history">
                                <SvgIcon component={AttachMoneyIcon} />
                            </div>
                            <div className="components-field-2-history">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Price
                                </Typography>
                                <Typography  >
                                    { ride.call.priceInCents}
                                </Typography>
                            </div>
                        </div>
                        <div className="fieldsShort-history">
                            <div className="components-img-2-history">
                                <SvgIcon component={CalendarTodayIcon} />
                            </div>
                            <div className="components-field-2-history">
                                <Typography  sx={{ fontWeight: "bold", display:"flex",textAlign: "left"}}>
                                    Date
                                </Typography>
                                <Typography  >
                                    {date.toString().slice(0,15)}
                                </Typography>
                            </div>
                        </div>

                        <div className="fieldsShort-history">
                            <div className="components-img-2-history">
                                <SvgIcon component={DescriptionIcon} />
                            </div>
                            <div className="components-field-2-history">
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
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <HistoryCard ride={ride} onClose={handleClose} />
            </Modal>
        </div>



    );
}

export default HistoryTab;