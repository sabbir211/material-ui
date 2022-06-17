import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CountriesContext } from './Countries';

const Country = ({ data }) => {
    const {setName,setOpen}=useContext(CountriesContext)
    const { name, flags} = data
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
                    <Button size="large" onClick={()=>{
                        setName(name.common) 
                        setOpen(true)
                    }}>Learn More</Button>
                </CardActions>
            </Card>
           
        </Grid>

    );
};

export default Country;