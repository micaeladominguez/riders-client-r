import {useEffect, useState} from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_ACTIVE_RIDE, GET_CALLS, GET_RIDER_STATUS} from "../../util/queries/sessionQueries";
import ErrorData from "../utils/errors/ErrorData";
import * as React from "react";
import CallTab from "../../components/CallTab/CallTab";
import './Tab.css';
import ActualRide from "../../components/ActualRide/ActualRide";
import Tab from "./Tab";
import { onError } from "apollo-link-error";
import Loading from "../utils/loading/Loading";

const Filter = (address) => {
    const [riderState, setRiderState] = useState(null);
    const [getRiderState, ] = useLazyQuery(GET_RIDER_STATUS);
    const setter = async () => {
        const response = await getRiderState();
        setRiderState(response.data.getRiderRideStatus.inRide);
    }
    useEffect(async () => {
        try{
            await setter();
        }catch (e){}
    },[]);

    return (
        <div >
            { riderState === null && <Loading />}
            { riderState === true  &&  <ActualRide  /> }
            { riderState === false && <Tab address={address.address} />}
        </div>
    );


}
export default Filter;