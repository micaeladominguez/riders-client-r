import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CallTab.css";
import {Grid} from "@mui/material";
const CallTab = (callTab) => {

    const card = (
        <React.Fragment >
                <Grid container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                       >
                    <Grid>
                        <CardContent   >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {callTab.call.callerName}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {callTab.call.addressAndHour}
                            </Typography>
                            <Typography variant="body2">
                                {callTab.call.description}
                            </Typography>
                            <Button size="medium">Option to see more fields</Button>
                        </CardContent>
                    </Grid>
                    <Grid >
                        <CardActions>
                            <div>
                                <Button variant="contained" color="success" className="button"> I'm interested </Button>
                            </div>
                        </CardActions>
                    </Grid>
                </Grid>
        </React.Fragment>
    );
    return(
        <div style={{ display: 'flex', position:'centre', width: '100%', borderRadius: '60%' }}>
            <Box  sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}  >
                <Card variant="outlined" sx={{width:'98%', borderRadius:'20px', opacity: '100%'}}>{card}</Card>
            </Box>
        </div>
    );
}

export default CallTab