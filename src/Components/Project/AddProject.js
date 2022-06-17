
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm, Controller } from 'react-hook-form';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom"
import { MenuItem, TextareaAutosize } from '@mui/material';

const theme = createTheme();

const categories = [
    {
      value: 'React',
      label: 'React',
    },
    {
      value: 'react_native',
      label: 'react native',
    },
    {
      value: 'blockchain',
      label: 'Blockchain',
    },
    {
      value: 'Database',
      label: 'Database',
    },
  ];
  



const AddProject = () => {
   const [category,setCategory]=useState("React")

    const navigate = useNavigate()
    const { register, handleSubmit, control,reset } = useForm()
  
    const onSubmit = async (data) => {
        console.log(data);
        const project={...data,category:category}
        console.log(project);
        fetch("http://localhost:5000/project",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(project)
        })
        .then(res => res.json())
        .then(data => {
            reset()
            swal("Success","Project added successfully","success")})
       
    }
    
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}

                >
                    <Typography component="h1" variant="h5">
                        Add Project
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Controller
                                    name="projectName"
                                    control={control}
                                    render={({ field }) => {
                                        return <TextField
                                            {...field}
                                            required
                                            autoComplete="given-firstName"
                                            name="firstName"
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            variant='standard'
                                        />

                                    }}
                                    defaultValue=""
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    
                                    name="description"
                                    control={control}
                                    render={({ field }) => {
                                        return <TextareaAutosize
                                            {...field}
                                            
                                            aria-label="Description"
                                            minRows={3}
                                            placeholder="Description"
                                            style={{ width: 200 }}
                                        />

                                    }}
                                    defaultValue=""
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    
                                    name="note"
                                    control={control}
                                    render={({ field }) => {
                                        return <TextareaAutosize
                                            {...field}
                                            
                                            aria-label="Note"
                                            minRows={3}
                                            placeholder="Note"
                                            style={{ width: 200 }}
                                        />

                                    }}
                                    defaultValue=""
                                />

                            </Grid>
                           
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="startDate"
                                    control={control}
                                    render={({ field }) => {
                                        return <TextField
                                            {...field}
                                            required
                                            type="text"
                                            autoComplete="given-date"
                                            fullWidth
                                            id="startDate"
                                            label="Start Date dd/mm/yyyy"
                                            autoFocus
                                            variant='standard'
                                        />

                                    }}
                                    defaultValue=""
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="endDate"
                                    control={control}
                                    render={({ field }) => {
                                        return <TextField
                                            {...field}
                                            type="text"
                                            required
                                            autoComplete="given-endDate"
                                            name="endDate"
                                            fullWidth
                                            id="endDate"
                                            label="End date dd/mm/yyyy"
                                            autoFocus
                                            variant='standard'
                                        />

                                    }}
                                    defaultValue=""
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => {
                                        return  <TextField
                                        {...field}
                                        id="standard-select-category"
                                        select
                                        label="Select category"
                                        value={category}
                                        onChange={handleChange}
                                        helperText="Please select your category"
                                        variant="standard"
                                      >
                                        {categories.map((option) => (
                                          <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                          </MenuItem>
                                        ))}
                                      </TextField>

                                    }}
                                    defaultValue=""
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Project
                        </Button>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}

export default AddProject