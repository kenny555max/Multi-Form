import React from 'react';
import { AppBar, Grid, Grow, Typography } from '@mui/material';
import { Container } from '@mui/system';

const Success = () => {
    return (
        <Grow in>
            <Grid container>
                <AppBar color="primary" position='static'>
                    <Typography variant="h2" padding="15px 0" fontSize="1.7rem" textAlign="center">Success</Typography>
                </AppBar>

                <Container>
                    <Grid marginTop="20px" textAlign="center">
                        <Typography variant="h1" fontSize="2rem">Thank You For Your Submission!</Typography>
                        <Typography variant="p" fontSize="1rem">You'll receive a mail shortly</Typography>
                    </Grid>
                </Container>
            </Grid>
        </Grow>
    );
}

export default Success;