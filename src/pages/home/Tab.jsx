import {useEffect, useState} from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_CALLS, GET_RIDER_STATUS} from "../../util/queries/sessionQueries";
import ErrorData from "../utils/errors/ErrorData";
import * as React from "react";
import CallTab from "../../components/CallTab/CallTab";
import './Tab.css';

const Tab = ({address}) => {
    const [calls, setCalls] = useState(null);
    const { loading, data, error } =  useQuery(GET_CALLS, {variables: {lat: address.lat, long: address.lng}, onCompleted:(data)=>{
            if(data) {
                setCalls( {...(data)} )
            }
        }});
    return (
        <div >
            {data && data.getAvailableCalls.length > 0 && (
                data.getAvailableCalls.map((call) => (
                    <CallTab call={call} />
                ))
            )
            }
            {data && data.getAvailableCalls.length === 0 && <ErrorData />}
            {!data && <ErrorData />}
        </div>
    );


}
export default Tab;
