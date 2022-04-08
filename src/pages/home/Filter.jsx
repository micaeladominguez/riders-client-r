import {useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ACTIVE_RIDE, GET_CALLS} from "../../util/queries/sessionQueries";
import ErrorData from "../utils/errors/ErrorData";
import * as React from "react";
import CallTab from "../../components/CallTab/CallTab";
import './Tab.css';
import ActualRide from "../../components/ActualRide/ActualRide";
import Tab from "./Tab";

const Filter = (address) => {
    const user = JSON.parse(window.localStorage.getItem('rider'));
    const [actualRide, setActualRide] = useState(null);
    const { loading, data, error } =  useQuery(GET_ACTIVE_RIDE, {onCompleted:(data)=>{
            if(data) {
                setActualRide( {...(data.getActiveRide)} )
            }
        }});
    return (
        <div >
            {actualRide !== null && ( <ActualRide actualRide={actualRide}/> )}
            { !data  && <Tab address={address.address} />}

        </div>
    );


}
export default Filter;