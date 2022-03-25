import './App.css';
import LoginPage from "./pages/login/LoginPage";
import {BrowserRouter, Route, Routes, Outlet, Navigate} from "react-router-dom";
import {ThemeProvider} from "@mui/system";
import {ridersTheme} from "./util/ridersTheme";
import SignUpPage from "./pages/signUp/SignUpPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
      <ThemeProvider theme={ridersTheme} >
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LoginPage /> } />
                  <Route path='/sign-up' element={<SignUpPage /> } />
                  <Route path='/home' element={<HomePage />} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
