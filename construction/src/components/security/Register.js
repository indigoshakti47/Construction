import { Avatar, Container, Grid, TextField, Typography, Button } from '@material-ui/core';
import React, { Component } from 'react';
import LockOutLineIcon from '@material-ui/icons/LockOutlined'

const style = {
    paper : {
        marginTop: 10,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    avatar: {
        margin: 10,
        backgroundColor: '#e53935'
    },
    form: {
        width: '100%',
        marginTop: 10,
    },
    submit: {
        marginBottom: 20,
        marginTop: 15,
    }
}

class Register extends Component {
    state={
        user: {
            name:'',
            lastName:'',
            email:'',
            password:''
        }
    }
    onChange = e => {
        let user= Object.assign({}, this.state.user);
        user[e.target.name]=e.target.value;
        this.setState({
            user:user
        })
    }
    registerUser = e => {
        e.preventDefault();
        console.log(this.state.user)
    }
    render() {
        return (
                <Container maxWidth="md">
                    <div style={style.paper}>
                        <Avatar style={style.avatar}>
                            <LockOutLineIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up!
                        </Typography>
                        <form style={style.form}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12}>
                                    <TextField name="name" onChange={this.onChange} value={this.state.user.name} fullWidth label="Enter your name"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField name="lastName" onChange={this.onChange} value={this.state.user.lastName} fullWidth label="Enter your last name"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField name="email" onChange={this.onChange} value={this.state.user.email} fullWidth label="Enter your email"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField type="password" name="password" onChange={this.onChange} value={this.state.user.password} fullWidth label="Enter your password"/>
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item md={6} xs={12}>
                                    <Button type="submit" onClick={this.registerUser} variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
        );
    }
}

export default Register;