import { useEffect } from "react";


const PRIVATE_MESSAGE = "private-message";
const { io } = require("socket.io-client");
const socket = io('http://localhost:8080', {
    extraHeaders: {
        'auth-token': window.localStorage.getItem('token'),
        'user-type' : 'rider'
    }
});
const useChat = ({rideId, setMessagess, messagess}) => {
    let localMessages = [];
    useEffect(() => {
        // Creates a WebSocket connection
        socket.on("connect", () => {
        });

        return () => {
            socket.off(PRIVATE_MESSAGE, callback);
        }
    }, [rideId]);
    const callback = (chatMessage) => {
        localMessages = [...messagess,  {message: chatMessage.text, own: false}];
        setMessagess(localMessages);
    };
    socket.on(PRIVATE_MESSAGE, callback);
    const sendMessage = (messageBody) => {
        console.log(rideId);
        if(messageBody){
            localMessages = [...messagess, {message: messageBody, own: true}];
            setMessagess(localMessages);
            socket.emit("private-message", {
                rideId: rideId,
                text: messageBody
            });
        }

    };

    return { messagess, sendMessage };
};

export default useChat;