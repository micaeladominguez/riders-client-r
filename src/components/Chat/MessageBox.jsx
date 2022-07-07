
import * as React from "react";
import {Box} from "@mui/system";
import './MessageBox.css';
export const MessageBox = ({text})  => {
        return (
            <div className="flex-container-message">
                {!text.own &&
                    <div className="box-message ">
                        <div>
                            <div className="circle-left">Caller</div>
                        </div>
                        <div className="message-left">
                            {text.message}
                        </div>
                    </div>
                }
                {text.own &&
                    <div className="box-message ">
                        <div>
                            <div className="circle-right">Me</div>
                        </div>
                        <div className="fit-context">
                            <div className="message-left user_message">
                                {text.message}
                            </div>
                        </div>


                    </div>
                }


            </div>
        )
}
