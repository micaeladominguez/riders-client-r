import React from "react";

import useChat from "./useChat";
import {MessageBox} from "./MessageBox";
import "./ChatRoom.css"
import {SvgIcon} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const ChatRoom = ({onClose, rideId, setMessagess, messagess}) => {
    const {  messagesChat, sendMessage } = useChat({rideId, setMessagess, messagess}); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };
    const home = () => {
        onClose();
    }
    return (
        <div className="chat-room-container">
            <div className="headerChat">
                <button className="back-home-button-chat" onClick={()=> home()}>
                    <SvgIcon component={ArrowBackIcon} sx={{marginLeft:2, color:'white'}} />
                </button>
            </div>
            <div className="messages-container">
                {console.log(messagess)}
                    {messagess.map(m => {
                        return(
                        <MessageBox text={m} />
                        )
                    })
                    }
            </div>
            <div className="new-message">
                <textarea
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Write message..."
                    className="new-message-input-field"
                />
                <button onClick={handleSendMessage} className="send-message-button">
                    Send
                </button>
            </div>

        </div>



    );
};

export default ChatRoom;