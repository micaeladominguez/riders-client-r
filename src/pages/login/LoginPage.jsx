import {useNavigate} from "react-router-dom";
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
import {useContext, useEffect, useState} from "react";
import logo from '../../assets/ridersLogo.png';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import "./LoginPage.css"
import * as React from "react";
import {GET_RIDER, LOGIN_RIDER} from "../../util/queries/sessionQueries";
import {useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {RiderContext} from "../../App";

const LoginPage = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const navigate = useNavigate()
    const loggedIn = window.localStorage.getItem('token')
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() =>{
        if (loggedIn){
            navigate('/home')
            window.location.reload();
        }
    }, [loggedIn]);

    const [login, ] = useMutation(LOGIN_RIDER, { onError: (e) => setErrorMessage(e.message)})
    const handleChange =(prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const { setRider} = useContext(RiderContext);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [getRider, ] = useLazyQuery(GET_RIDER);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await login({variables: {email: values.email, password: values.password}})
        if(response.data) {
            const token = response.data.logInRider.token;
            window.localStorage.setItem('token', token)
            const riderResponse = await getRider();
            const riderResponded = riderResponse.data.getRider;
            console.log(riderResponded);
            setRider(riderResponded);
            window.localStorage.setItem('rider', JSON.stringify(riderResponded))
            navigate('/home')
        }
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
                        {<img src={logo} className={'loginLogo'}  alt='Riders logo'/>}
                        <Typography component="h1" variant="h5">
                            Sign in
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
                            <label data-testid="errorMessage" style={labelStyle} id='passwordLabel'>{errorMessage}</label>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                data-testid="sign-in-bottom"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/sign-up" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
            </Container>
    );
}

const emailValidation = email => {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
        )
    ) {
        return true;
    }
    if (email.trim() === '') {
        return false;
    }
    return false;
};


export default LoginPage