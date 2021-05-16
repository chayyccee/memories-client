import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './Icon';
import Input from './Input';
import useStyles from './styles';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    }
    const googleSuccess = (res) => {
        console.log(res);
    }
    const googleFailure = () => {
        console.log("Google Login was unsuccessful. Try again later.");
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                      <GoogleLogin
                        clientId="GOOGLE ID"
                        render={(renderProps) => (
                            <Button
                              className={classes.googleButton}
                              color="primary"
                              fullWidth
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              startIcon={<Icon />}
                              variant="contained"
                              >
                                  Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                      />
                      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                          {isSignUp ? 'Sign Up' : 'Sign In'}
                      </Button>
                      <Grid container justify="flex-end">
                          <Grid item>
                              <Button onClick={switchMode}>
                                  {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                              </Button>
                          </Grid>
                      </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;
