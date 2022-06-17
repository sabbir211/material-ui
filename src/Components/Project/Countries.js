import { Grid } from '@mui/material';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';

import Country from './Country';
import "./projects.css"


export const CountriesContext = createContext("default value")


const Countries = () => {
    const [open, setOpen] = useState(false);
    const [loading,setLoading]=useState(false)
    const [country, setCountry] = useState([])
    const [name, setName] = useState('')
    useEffect(() => {
        setLoading(true)
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                setCountry(data)
            setLoading(false)
            })
    }, [])
    const providerValues=useMemo(()=>({country,name,setName,name,setOpen}),[country,name,setName,name,setOpen])
    if(loading){
        return <p>loading...</p>
    }
    return (
        <CountriesContext.Provider value={providerValues}>
            <div className='container'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        country.slice(0,20).map((p, index) => <Country key={index} data={p}></Country>)
                    }
                </Grid>
               {
                name && <CountryDetails  setName={setName} open={open} setOpen={setOpen}></CountryDetails>
               }

            </div>
        </CountriesContext.Provider>




    );
};

export default Countries;