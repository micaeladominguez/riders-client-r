import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Select from 'react-select';
import {
    Box, Button, Checkbox,
    Container,
    CssBaseline,
    FormControl, FormControlLabel, Grid, IconButton,
    InputAdornment,
    InputLabel, Link,
    OutlinedInput,
    Typography
} from "@mui/material";
import logo from "../../assets/ridersLogo.png";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import './SignUpPage.css'
import {useMutation} from "@apollo/client";
import {LOGIN_RIDER, REGISTER_RIDER} from "../../util/queries/sessionQueries";
import * as React from "react";


const SignUpPage = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
        dni: '',
        showPassword: false,
        vehicle: '',
    });

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()
    const [signup, {data, loading, error}] = useMutation(REGISTER_RIDER , {
        onError: (e) => setErrorMessage(e.message),
        onCompleted: (res) => {
            console.log(res);
            setErrorMessage('')
            navigate('/')
        },
    })


    const handleChange =(prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values);
    };
    const handleVehicleChange = selectedOption => {
        setValues({ ...values, vehicle: selectedOption.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const options = [
        { value: 'bicycle', label: 'Bicycle' },
        { value: 'motorcycle', label: 'Motorcycle' },
        { value: 'car', label: 'Car' },
        { value: 'van', label: 'Van' }
    ];

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await signup({variables: {email: values.email, password: values.password, name: values.name,
                surname: values.surname,
                DNI: parseInt(values.dni) ,
                vehicleType: values.vehicle }})

    };
    const labelStyle = {
        display: 'block',
        color: 'red',
    }

    return (
        <Container component="main" maxWidth="sm" className={'cover-screen'}>
            <div className={'box-shadow'}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src={logo} className={'loginLogo'}  alt='Riders logo'/>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <FormControl fullWidth margin="normal" sx={{ mt: 1}} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                required
                                id="email"
                                type='text'
                                value={values.email}
                                onChange={handleChange('email')}
                                label="Email"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mt: 1}} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                required
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <div style={{display: 'flex', justifyContent: 'space-between'} }>
                        <FormControl margin="normal" sx={{ mt: 2}} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
                            <OutlinedInput
                                required
                                id="name"
                                type='text'
                                value={values.name}
                                onChange={handleChange('name')}
                                label="Name"
                            />
                        </FormControl>

                        <FormControl margin="normal" sx={{ mt: 2}} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
                            <OutlinedInput
                                required
                                id="surname"
                                type='text'
                                value={values.surname}
                                onChange={handleChange('surname')}
                                label="Surname"
                            />
                        </FormControl>
                        </div>

                        <FormControl margin="normal" fullWidth sx={{ mt: 2}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">DNI</InputLabel>
                            <OutlinedInput
                                required
                                id="dni"
                                type='number'
                                value={values.dni}
                                onChange={handleChange('dni')}
                                label="DNI"
                            />
                        </FormControl>
                        <FormControl margin="normal" fullWidth sx={{ mt: 2}} variant="outlined"  >
                            <Select
                                placeholder={"Select your vehicle..."}
                                value={values.vehicle.label}
                                onChange={handleVehicleChange}
                                options={options}
                            />
                        </FormControl>

                        <label style={labelStyle} id='passwordLabel'>{errorMessage}</label>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {"Already registered? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </Container>
    );
}

export default SignUpPage