import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { MyContainer, LeftDiv, RightDiv, Header } from "./Login.style.js";

// login component for both customer and vendor app
export default function SignIn() {
  const history = useHistory();

  // get the url's pathname
  const pathname = "http://13.54.19.72:5000/admin/login";
  const redirectTo = "/";

  const [username, setUsername] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [password, setPassword] = useState("");

  // open state for materialUI snackbar
  const [open, setOpen] = useState(false);

  // details for materialUI snackbar
  const [snackbar, setSnackbar] = useState({});

  const theme2 = createMuiTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });

  let textFieldProps = {
    error: emailHelper.length !== 0,
    helperText: emailHelper,
  };

  textFieldProps["id"] = "Username";
  textFieldProps["label"] = "Username";

  const onChange = (e) => {
    let valid;

    switch (e.target.id) {
      // used to input a valid email
      case "email":
        setUsername(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;

      default:
        setUsername(e.target.value);
        break;
    }
  };

  // duration for snackbar
  const duration = 3000;

  // send username and password on form submission
  const sendData = async () => {
    // create a data object for axios post
    const data = { password: password };
    data["username"] = username;
    try {
      const res = await axios.post(pathname, data, {
        headers: { "Content-Type": "application/json" },
      });
      // set snackbar details
      setOpen(true);
      setSnackbar({
        data: "Login successful",
        severity: "success",
      });

      console.log(res);

      // store token
      // localStorage.setItem("token", res.data.token);

      // auth.login(res.data.token, user);

      history.push(redirectTo);
    } catch (error) {
      console.log(error);

      // set snackbar details
      setOpen(true);
      setSnackbar({
        data: error.response.data,
        severity: "error",
      });
    }
  };

  // handleclose template from materialUI docs
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendData();
    }
  };

  return (
    <>
      <LeftDiv />
      <RightDiv>
        <Header>Login</Header>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            autoFocus
            value={username}
            helperText={emailHelper}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            {...textFieldProps}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <br></br>
          <ThemeProvider theme={theme2}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              fullWidth
              style={{ fontSize: "16px" }}
              onClick={() => {
                sendData();
              }}
            >
              Sign In
            </Button>
          </ThemeProvider>
        </form>
      </RightDiv>
    </>
  );
}
