import { Grid } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';
import CountryDetails from '../CountryDetails';
import Country from './Country';
import "./projects.css"


export const CountriesContext = createContext("default value")


const Countries = () => {
    const [country, setCountry] = useState([])
    const [code, setCode] = useState(null)
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const getNumericCode = (code) => {
        setCode(code)
        console.log("bal")
        console.log(code);
    }

    return (
        <CountriesContext.Provider value={{ country, getNumericCode: getNumericCode }}>
            <div className='container'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        country.map((p, index) => <Country key={index} data={p}></Country>)
                    }
                </Grid>
                {
                    code && <CountryDetails ></CountryDetails>
                }

            </div>
        </CountriesContext.Provider>




    );
};

export default Countries;