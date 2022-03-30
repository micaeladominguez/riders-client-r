import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import "../CallCard/CallCard.css";
import GradeIcon from '@mui/icons-material/Grade';
import {SvgIcon} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';export const CallCard = () => {
    const actualCall = {
        call: {
            callerName: "CallerName",
            addressAndHour: "ADDRESS AND HOUR",
            description: "description",
            price: "100$",
        }
    }
    const navigate = useNavigate();
    return (
        <div  style={{ marginTop: 1.5,height: '100vh', backgroundColor: '#e53935', display: "flex", alignItems:"center", flexDirection: "column"}} >
            <div style= {{border: '1px solid #E8E6E0', marginTop: 40,  borderRadius: '5%'}} className="all-grid">
                <div className="components" style={{marginTop:20}}>
                    <SvgIcon component={GradeIcon} sx={{alignItems: 'centre'}} />
                    <Typography sx={{ fontSize: 20, alignItems: 'centre'}} >
                           Caller-Rating:   { actualCall.call.price}
                    </Typography>
                </div>
                <div className="components">
                    <SvgIcon component={AttachMoneyIcon} sx={{alignItems: 'centre'}} />
                    <Typography sx={{ fontSize: 20, alignItems: 'centre' }} >
                             Price:   { actualCall.call.price}
                    </Typography>
                </div>
                <div className="components">
                    <SvgIcon component={QueryBuilderIcon} sx={{alignItems: 'centre'}} />
                    <Typography sx={{ fontSize: 20, alignItems: 'centre' }}>
                        Hour:  {actualCall.call.addressAndHour}
                    </Typography>
                </div>
                <div className="components">
                    <SvgIcon component={LocationOnIcon} sx={{alignItems: 'centre'}} />
                    <Typography sx={{ fontSize: 20, alignItems: 'centre' }}>
                        Start-Address:  {actualCall.call.addressAndHour}
                    </Typography>
                </div>
               <div className="components">
                   <SvgIcon component={LocationOnIcon} sx={{alignItems: 'centre'}} />
                   <Typography sx={{ fontSize: 20, alignItems: 'centre' }}>
                       Finish-Address:  {actualCall.call.addressAndHour}
                   </Typography>
               </div>
                <div className="components" style={{marginBottom:20}}>
                    <SvgIcon component={DescriptionIcon} sx={{alignItems: 'centre'}} />
                    <Typography sx={{ fontSize: 20, alignItems: 'centre' }}>
                        Description:  {actualCall.call.description}
                    </Typography>
                </div>
            </div>
            <div className="all-grid-2">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, marginLeft:2, backgroundColor: 'white', color: '#e53935'	}}> Accept Ride </Button>
            </div>
        </div>
    );

}