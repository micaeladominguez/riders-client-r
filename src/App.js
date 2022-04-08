import './App.css';
import LoginPage from "./pages/login/LoginPage";
import {BrowserRouter, Route, Routes, Outlet, Navigate} from "react-router-dom";
import {ThemeProvider} from "@mui/system";
import {ridersTheme} from "./util/ridersTheme";
import SignUpPage from "./pages/signUp/SignUpPage";
import HomePage from "./pages/home/HomePage";
import {createContext, useMemo, useState} from "react";
import CallCardPage from "./pages/callCard/CallCardPage";
import ErrorPage from "./pages/error/ErrorPage";

export const CallContext = createContext({
    call: {
        callerRatingStars: 0,
        description: "",
        finishLocation: {address: "", lat: 0, long: 0, __typename: "Location"},
        id: "",
        priceInCents: 0,
        requestedVehicles: {bicycle: false, motorcycle: false, car: false, van: false, __typename: "RequestedVehicles"},
        startLocation: {address: "", lat: 0, long: 0, __typename: "Location"},
    },
    setCall: () => {}
});

function App() {
    const [call, setCall] = useState({
        callerRatingStars: 0,
        description: "",
        finishLocation: {address: "", lat: 0, long: 0, __typename: "Location"},
        id: "",
        priceInCents: 0,
        requestedVehicles: {bicycle: false, motorcycle: false, car: false, van: false, __typename: "RequestedVehicles"},
        startLocation: {address: "", lat: 0, long: 0, __typename: "Location"},
    });
    const value = useMemo(
        () => ({ call, setCall }),
        [call]
    );
  return (
      <CallContext.Provider value={ value }>
        <ThemeProvider theme={ridersTheme} >
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LoginPage /> } />
                  <Route path='/sign-up' element={<SignUpPage /> } />
                  <Route path='/home' element={<HomePage />} />
                  <Route path='/card' element={<CallCardPage />} />
                  <Route path='/errorPage' element={<ErrorPage />} />
              </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CallContext.Provider>
  );
}

export default App;
