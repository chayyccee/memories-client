import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import memories from '../../images/memories.png';

import useStyles from './styles';

const Navbar =  () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <div className={classes.brandContainer}>
              <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
              <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
              {user ? (<div className={classes.profile}>
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                  <Typography className={classes.UserName} variant="h6">{user.result.name}</Typography>
                  <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
              </div>) : (
                  <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
              )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;