import React from "react";
import  '../errors/ErrorAlreadyInRide.css';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import {Modal} from "@mui/material";
import {RateCaller} from "../../../components/RateCaller/RateCaller";
const LandingFinishCall = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const home = () => {
        navigate('/home');
        window.location.reload();
    }
    const rateCaller = () => {
        setOpen(true);
    }
    return (
        <div className="container-error">
            <div >
                <Avatar  component={DoneAllIcon} sx={{ color: "#ee2738", backgroundColor: "white", width:50, height:50 }}  />
            </div>
            <div className="ok-message">
                    <strong> You Finish Your Ride Successfully!</strong>
            </div>
            <div className="options">
                <div className="content-text"> Your options</div>
                <div className="buttons-error">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 1, marginRight:2,ackgroundColor: '#e53935', color: 'white' 	}}
                        onClick={() => rateCaller()}> Rate caller </Button>
                    <div className="or-option"> or </div>
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={() => home()}
                        sx={{ mt: 1, backgroundColor: '#e53935', color: 'white'	}}
                    > Back Home </Button>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <RateCaller  onClose={handleClose} />
            </Modal>

        </div>


    );
}
export default LandingFinishCall;