import React from "react";
import './ErrorData.css'
import Button from "@mui/material/Button";
const ErrorData = () => {
    const refresh = () => {
        window.location.reload();
    }

    return (
        <div className="distribution">
            <div className="bar">
                <div className="warn">
                    <i className="ico">&#9888;</i> No calls available
                </div>
            </div>
            <Button
                variant="contained"
                type="submit"
                onClick={() => refresh()}
                sx={{ mt: 2, mb: 2, backgroundColor: '#e53935', color: 'white', width:'60%'	}}
                > Search for calls </Button>
        </div>

    );
}
export default ErrorData;