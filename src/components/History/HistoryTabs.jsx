import {useState} from "react";
import { useQuery} from "@apollo/client";
import { GET_RIDES} from "../../util/queries/sessionQueries";
import * as React from "react";
import './Tabs.css';

import HistoryTab from "./HistoryTab";

const HistoryTabs = () => {
    const [rides, setRides] = useState(null);
    const { loading, data, error } =  useQuery(GET_RIDES, {variables: {},onCompleted :(data)=>{
            if(data) {
                setRides( {...(data)} )
            }
        }});
    return (
        <div >
            {console.log(data)}

            {data && data.getRiderRecord.length > 0 && (
                data.getRiderRecord.map((ride) => (
                    <HistoryTab ride={ride} />
                ))
            )
            }
        </div>
    );


}
export default HistoryTabs;