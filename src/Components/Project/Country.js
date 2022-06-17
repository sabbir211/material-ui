import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import CountryDetails from '../CountryDetails';
import { CountriesContext } from './Countries';

const Country = ({ data }) => {
    const {getNumericCode}=useContext(CountriesContext)
    const { name, flags,numericCode} = data
    return (
        <Grid item xs={12} sm={4} >

            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={flags.png}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name.common}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {name.official}
                    </Typography>
                </CardContent>
                <CardActions>
                  
                    <Button size="large" onClick={getNumericCode(numericCode)}>Learn More</Button>
                </CardActions>
            </Card>
           
        </Grid>

    );
};

export default Country;