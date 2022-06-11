import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_RIDER} from "../../util/queries/sessionQueries";
import "./Grade.css";
import { SvgIcon} from "@mui/material";
import * as React from "react";
import GradeIcon from "@mui/icons-material/Grade";

export const Grade = () => {
    const { loading, data, error } =  useQuery(GET_RIDER, {variables: {},onCompleted :(data)=>{
    }});
    useEffect(()=>{

    },[])
    return (

        <div className="flex-grades">
            {data  &&
                <div>
                    <div className="info-grades">
                        <div className="field-requirement-grades">
                            <div className="bar-field-grades">
                                <div className="info-field-grades">
                                    <strong> YOUR ACTUAL RATING IS: </strong>
                                </div>

                            </div>
                            <div className="components-field-grades" sx={{marginTop:2, marginBottom:0}}>
                                {(() => {
                                    switch (data.getRider.rating.stars) {
                                        case 1:   return <div className="components-img-grades">
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        case 2: return <div className="components-img-grades">
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        case 3:  return <div className="components-img-grades">
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        case 4: return <div className="components-img-grades">
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        case 5: return <div className="components-img-grades">
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                        default:     return <div className="components-img-grades">
                                            <SvgIcon component={GradeIcon} />
                                        </div>;
                                    }
                                })()}
                            </div>


                        </div>
                    </div>
                </div>

            }

        </div>
    )
}