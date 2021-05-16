import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './Icon';
import Input from './Input';
import useStyles from './styles';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        // ?. is a chain operator used to avoid getting an error in the event res doesn't exist. so rather than throw an error, it siimply says undefined
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: {result, token} });

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) => {
        console.log(error);
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
                      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                          {isSignUp ? 'Sign Up' : 'Sign In'}
                      </Button>
                      <GoogleLogin
                        clientId="1084876429631-m5ivdaobr3ch1irfpn60kfl4d32t3t7a.apps.googleusercontent.com"
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
