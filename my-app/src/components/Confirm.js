import React, { useContext } from 'react';
import { AppBar, Button, Grow, Typography, Grid } from '@mui/material';
import useStyles from './style';
import GlobalContext from '../context/context';
import { Container } from '@mui/system';

import { connect } from 'react-redux';
import { insertUsers } from '../actions/action';

const Confirm = ({ insertUsers }) => {
    const { fields, setStep } = useContext(GlobalContext);
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();

        insertUsers(fields);
    }

    return (
        <Grow in>
            <Grid>
                <AppBar position='static' color="primary">
                    <Typography variant="h2" textAlign="center" padding="15px 0" fontSize="1.7rem">Confirm</Typography>
                </AppBar>

                <Container>
                    <Grid container className={classes.GridContainer} marginTop="20px">
                        <Grid item xs={12} sm={7} md={5} lg={5}>
                            <Grid item textAlign="center">
                                <Typography variant='h5'>First Name:</Typography>
                                <Typography variant="h6">{fields.firstName}</Typography>
                            </Grid>
                            <Grid item textAlign="center" marginTop="25px">
                                <Typography variant='h5'>Last Name:</Typography>
                                <Typography variant="h6">{fields.lastName}</Typography>
                            </Grid>
                            <Grid item textAlign="center" marginTop="25px">
                                <Typography variant='h5'>Email:</Typography>
                                <Typography variant="h6">{fields.email}</Typography>
                            </Grid>
                            <Grid item textAlign="center" marginTop="25px">
                                <Typography variant='h5'>Occupation:</Typography>
                                <Typography variant="h6">{fields.occupation}</Typography>
                            </Grid>
                            <Grid item textAlign="center" marginTop="25px">
                                <Typography variant='h5'>City:</Typography>
                                <Typography variant="h6">{fields.city}</Typography>
                            </Grid>
                            <Grid item textAlign="center" marginTop="25px">
                                <Typography variant='h5'>Bio:</Typography>
                                <Typography variant="h6">{fields.bio}</Typography>
                            </Grid>
                            <Grid item marginTop="25px" textAlign="center">
                                <form onSubmit={onSubmit}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="contained"
                                        type='submit'
                                        style={{ marginRight: "5px" }}
                                    >
                                        CONFIRM & CONTINUE
                                    </Button>
                                    <Button
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                        onClick={(e) => setStep((prevStep) => prevStep - 1)}
                                        style={{ marginLeft: "5px" }}
                                    >
                                        BACK
                                    </Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grow >
    );
}

export default connect(null, { insertUsers })(Confirm);