import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CallTab.css";
import {Grid} from "@mui/material";
const CallTab = () => {

    const card = (
        <React.Fragment >
            <div >
                <Grid container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center">
                    <Grid>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Caller Name
                            </Typography>
                            <Typography variant="h5" component="div">
                                ADDRESS AND HOUR
                            </Typography>
                            <Typography variant="body2">
                               description

                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button size="medium">Option to see more fields</Button>
                        </CardActions>
                    </Grid>
                    <Grid >
                        <div className="formCenter">
                            <Button variant="contained" color="success" className="button"> I'm interested </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
    return(
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}

export default CallTab