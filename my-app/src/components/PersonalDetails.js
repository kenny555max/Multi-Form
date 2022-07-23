import React, { useContext } from 'react';
import { AppBar, Grow, Typography, Grid, Container, TextField, Button } from '@mui/material';

import useStyles from './style';
import GlobalContext from '../context/context';

const PersonalDetails = () => {
    const { fields, setStep, handleChange } = useContext(GlobalContext);
    const classes = useStyles();

    return (
        <Grow in>
            <Grid container>
                <AppBar color='primary' position='static'>
                    <Typography variant="h2" padding="15px 0" textAlign="center" fontSize="1.7rem">Enter Personal Details</Typography>
                </AppBar>

                <Container>
                    <Grid container marginTop="20px" className={classes.GridContainer}>
                        <Grid item xs={12} sm={7} textAlign="center">
                            <TextField
                                variant="standard"
                                fullWidth
                                name="occupation"
                                value={fields.occupation}
                                onChange={(e) => handleChange(e)}
                                label="Occupation"
                            />
                            <TextField
                                variant="standard"
                                fullWidth
                                label="City"
                                value={fields.city}
                                name="city"
                                onChange={(e) => handleChange(e)}
                                style={{ marginTop: "15px" }}
                            />
                            <TextField
                                variant="standard"
                                value={fields.bio}
                                name="bio"
                                onChange={(e) => handleChange(e)}
                                fullWidth
                                label="Bio"
                                style={{ marginTop: "15px" }}
                            />
                            <Grid item marginTop="15px">
                                <Button
                                    size="small"
                                    variant="contained"
                                    onClick={(e) => setStep((prevStep) => prevStep + 1)}
                                    color="primary"
                                    style={{ marginRight: "5px" }}
                                >
                                    CONTINUE
                                </Button>
                                <Button
                                    size="small"
                                    onClick={(e) => setStep((prevStep) => prevStep - 1)}
                                    variant="outlined"
                                    color="secondary"
                                    style={{ marginLeft: "5px" }}
                                >
                                    BACK
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grow>
    );
}

export default PersonalDetails;