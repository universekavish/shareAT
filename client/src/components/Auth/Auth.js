import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState();

    const isSignUp = false;

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{ isSignUp ? "Sign Up" : "Sign In"}</Typography>
                <Form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                            <Input name="password" label="password" handleChange={handleChange} type="password"/>
                    </Grid>
                </Form>
            </Paper>
        </Container>
    );
};

export default Auth;