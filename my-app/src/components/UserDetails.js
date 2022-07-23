import React, { useContext } from 'react';
import { AppBar, Grid, Typography, Container, Grow, TextField, Button } from '@mui/material';

import useStyles from './style';
import GlobalContext from '../context/context';

const UserDetails = () => {
    const { fields, setStep, handleChange } = useContext(GlobalContext);
    const classes = useStyles();

    return (
        <Grow in>
            <Grid container>
                <AppBar color="primary" position='static'>
                    <Typography variant='h2' padding="15px 0" textAlign="center" fontSize="1.7rem">Enter User Details</Typography>
                </AppBar>

                <Container>
                    <Grid marginTop="20px" container className={classes.GridContainer}>
                        <Grid item lg={4} sm={6} md={5} className={classes.GridItem}>
                            <TextField
                                value={fields.firstName}
                                fullWidth
                                name='firstName'
                                label="First Name"
                                variant='standard'
                                onChange={(e) => handleChange(e)}
                                />
                            <TextField
                                name='lastName'
                                value={fields.lastName}
                                onChange={(e) => handleChange(e)}
                                fullWidth
                                label="Last Name"
                                variant="standard"
                                style={{ marginTop: "15px" }}
                                />
                            <TextField
                                name='email'
                                variant="standard"
                                onChange={(e) => handleChange(e)}
                                fullWidth
                                style={{ marginTop: "15px" }}
                                label="Email"
                                value={fields.email}
                            />
                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                style={{ marginTop: "15px" }}
                                onClick={(e) => setStep((prevStep) => prevStep + 1)}
                            >
                                CONTINUE
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grow>
    );
}

export default UserDetails;