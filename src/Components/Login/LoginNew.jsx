import React, { useState } from 'react';

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import HMS from '../../assets/images/banner.png'
import '../Login/Login.css'
import Layout from '../Layout/Layout';
import { loginContext } from '../../App';
import { useContext } from 'react';
function LoginNew() {
    const { login, setLogin } = useContext(loginContext);
    const users = [
        {
            username: 'hospital',
            password: '12345'
        }
    ];
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    // console.log(data);

    const { uname, pass } = data;
    const checkUser = () => {
        const usercheck = users.map(user => (user.username === uname && user.password === pass)
        )
        if (usercheck) {
            setLogin(true)
            
        } else {
            setLogin(false)
        }


    }

    // const changeHandler = (e) => {
    //     console.log(e);
    //     setData({ ...data, [e.target.name]: [e.target.value] })
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser();
        console.log(checkUser());
    }

    return (
        <div className='login'>
            <Grid container sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: 0, }}>
                <Grid sm={12} md={12} lg={12} sx={{ position: 'relative', overflow: 'hidden' }}>
                    <div>
                        <img className='login' src={HMS}></img>
                    </div>
                </Grid>
                <Grid sm={6} md={6} lg={6} sx={{ position: 'absolute' }}>
                    <form className='loginForm'
                        onSubmit={handleSubmit}
                    >
                        <Card sx={{ minWidth: 475, minHeight: 370, p: 3 }}>
                            <CardContent sx={{ alignContent: 'center', display: 'flex', rowGap: '30px', flexDirection: 'column' }}>
                                <TextField
                                    type="text"
                                    name="username"
                                    value={uname}
                                    size='small'
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend2" required
                                    onChange={(e) => setData(e.target.value)} />
                                {/*                                 
                                {errors.email && <span style={{ color: "red" }}>
                                    *Email* is mandatory </span>} */}

                                <TextField
                                    type="password"
                                    name="password"
                                    size='small'
                                    value={pass}
                                    placeholder="Password"
                                    aria-describedby="inputGroupPrepend2" required
                                    onChange={(e) => setData(e.target.value)} />
                                <Button type='submit' sx={{ background: '#2daab8', color: '#fff', "&:hover": { backgroundColor: "#2daab8" } }} fullWidth size="small">LogIn</Button>

                            </CardContent>
                            <Typography sx={{ textAlign: 'center', p: 1 }}>Need an account?  <span style={{ color: '#2e4765', wordSpacing: '10px', fontWeight: 'bold' }}>SignUp</span></Typography>
                            <Typography sx={{ textAlign: 'center' }}>Forgot Password</Typography>
                        </Card>
                    </form>
                </Grid>

            </Grid>
        </div>
    )
}
export default LoginNew;