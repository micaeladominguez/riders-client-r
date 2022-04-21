import {useEffect, useState} from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_ACTIVE_RIDE, GET_CALLS} from "../../util/queries/sessionQueries";
import ErrorData from "../utils/errors/ErrorData";
import * as React from "react";
import CallTab from "../../components/CallTab/CallTab";
import './Tab.css';
import ActualRide from "../../components/ActualRide/ActualRide";
import Tab from "./Tab";
import { onError } from "apollo-link-error";

const Filter = (address) => {
    const user = JSON.parse(window.localStorage.getItem('rider'));
    const [actualRide, setActualRide] = useState('hola');
    const [getActualRide, { loading, data, error }] =  useLazyQuery(GET_ACTIVE_RIDE);
    const setter = async () => {
        const response = await getActualRide();
        if( response.data.getActiveRide === null) {
            setActualRide(null)
        }
        if(response.data.getActiveRide !== null){
            setActualRide({...(response.data.getActiveRide)})
        }
    }
    useEffect(async () => {
        try{
            await setter();
        }catch (e){
            window.location.reload(false);
        }
    },[]);

    return (
        <div >
            { actualRide !== null && actualRide !== 'hola' && ( <ActualRide actualRide={actualRide} /> )}
            { actualRide === null && <Tab address={address.address} />}
        </div>
    );


}
export default Filter;