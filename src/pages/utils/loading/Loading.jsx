import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <ReactLoading type="spin" color="#e53935"/>
        </div>
    );
}
export default Loading;