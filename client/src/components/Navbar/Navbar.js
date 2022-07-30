import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

const NavBar = () => {
    const classes = useStyles();

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">ShareAT</Typography>
        <img className={classes.image} src={shareAT} alt="shareAT" height="60"/>
    </AppBar>
    )
}

export default NavBar