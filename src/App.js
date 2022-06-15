import LoginPage from "./pages/login/LoginPage";
import React from "react";
import {BrowserRouter, Route, Routes, Outlet, Navigate} from "react-router-dom";
import {ThemeProvider} from "@mui/system";
import {ridersTheme} from "./util/ridersTheme";
import SignUpPage from "./pages/signUp/SignUpPage";
import HomePage from "./pages/home/HomePage";
import {createContext, useMemo, useState} from "react";
import CallCardPage from "./pages/callCard/CallCardPage";
import ErrorPage from "./pages/utilsPages/ErrorPage";
import LandingNotificationPage from "./pages/utilsPages/LandingNotificationPage";
import LandingFinishCallPage from "./pages/LandingFinish/LandingFinishCallPage";
import HistoryPage from "./pages/Grades/HistoryPage";

export const RiderContext = createContext({
    rider: {
        DNI: 0,
        email: {__typename: '', address: ''},
        id: "",
        name: "",
        rating: {__typename: '', stars: 5},
        surname: "",
        vehicle: {__typename: '', type: ''},
    },
    setRider: () => {}
});

function App() {
    const [rider, setRider] = useState({
        DNI: 0,
        email: {__typename: '', address: ''},
        id: "",
        name: "",
        rating: {__typename: '', stars: 5},
        surname: "",
        vehicle: {__typename: '', type: ''},

    });
    const value = useMemo(
        () => ({ rider, setRider }),
        [rider]
    );
    const isLoggedIn = window.localStorage.getItem('token') ? true : false;

    return (
        <RiderContext.Provider value={ value }>
            <ThemeProvider theme={ridersTheme} >
                <BrowserRouter>
                 <Routes>

                    <Route path='/' element={<LoginPage /> } />
                    <Route path='/sign-up' element={<SignUpPage /> } />
                    <Route path='/home' element={<HomePage rider={rider}/>} />
                    <Route path='/card' element={<CallCardPage />} />
                    <Route path='/errorPage' element={<ErrorPage />} />
                    <Route path='/landingN' element={<LandingNotificationPage/>} />
                    <Route path='/landingF' element={<LandingFinishCallPage/>} />
                     <Route path='/history' element={<HistoryPage/>} />

                 </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </RiderContext.Provider>
  );
}

export default App;
