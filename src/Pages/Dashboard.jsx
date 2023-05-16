import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { card_content, Doctorcard } from '../assets/jsonData/Dashboard';
import { Divider } from '@mui/material/node';
import '../Components/Layout/layout.css'
import { useEffect } from 'react';
import instance from './Host';
import { useState } from 'react';
import man from '../assets/images/man.png'
import cap from '../assets/images/cap.png'
import wheel from '../assets/images/wheel.png'
import pharma from '../assets/images/pharma.png'
import Doc1 from '../assets/images/Doc1.png'
import Doc2 from '../assets/images/Doc2.png'
import Doc3 from '../assets/images/Doc3.png'
import Doc4 from '../assets/images/Doc4.png'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Dashboardpage() {
    const [TotalPatient, setTotalPatient] = useState('')
    const [TotalDoctor, setTotalDoctor] = useState('')

    const card_content = ([
        {
            img: man,
            num: TotalDoctor,
            typo: 'Doctors'
        },
        {
            img: cap,
            num: '30',
            typo: 'Nurses'
        },
        {
            img: wheel,
            num: TotalPatient,
            typo: 'Patients'
        },
        {
            img: pharma,
            num: '2110',
            typo: 'Pharmacusts'
        },
    ])
    useEffect(() => {
        instance.post('patient/view').then((res) => {
            setTotalPatient(res.data.message.message.message.length)

        })
        instance.post('Doctor/view').then((res) => {
            setTotalDoctor(res.data.message.message.message.length)

        })

    }, [])
    return (
        <>
            <Grid container sx={{ pb: 4 }}>
                {card_content.map((c) => {
                    return (
                        <Grid xs={12} md={3} lg={3} sm={6} sx={{ p: 2 }}>
                            <Card sx={{ minWidth: 155, minHeight: 125, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: '15px' }}>
                                <CardContent sx={{ columnGap: '30px', alignItems: 'center', marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
                                    <img src={c.img}></img>
                                    <div>
                                        <Typography sx={{ textAlign: 'left', fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '45px', color: '#2e4765' }}>{parseInt(`${c.num}`)}</Typography>
                                        <Typography sx={{ textAlign: 'left', fontSize: '19px', color: '#b2b5c0', fontFamily: 'Rajdhani', fontWeight: 500, }}>{c.typo}</Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )

                })}
            </Grid>
            <Card sx={{ m: 1, borderRadius: '10px' }}>
                <div style={{ padding: '30px' }}>
                    <Typography sx={{ textAlign: 'left', pb: 3, fontSize: '22px', fontWeight: 'Bold', fontFamily: 'Rajdhani', color: '#2e4765' }}>Hospital Staff</Typography>
                    <Divider />
                </div>

                <Grid container >
                    {Doctorcard.map((c) => {
                        return (
                            <Grid xs={12} md={3} lg={3} sm={6} sx={{ py: 4, px: 2 }}>
                                <Card sx={{ minWidth: 165, minHeight: 300, boxShadow: '0 7px 15px rgba(80,143,244,.15)' }}>
                                    <CardContent sx={{ columnGap: '50px', alignItems: 'center', marginTop: '28px', textAlign: 'center' }}>
                                        <img src={c.Doc_img}></img>
                                        <Box sx={{ pt: 3 }}>
                                            <Typography sx={{ fontFamily: 'Rajdhani', fontSize: '22px', fontWeight: 600, color: '#2e4765' }}>{c.Doc_Name}</Typography>
                                            <Typography sx={{ fontFamily: 'poppins', fontSize: '14px', color: '#818e94', fontWeight: 500 }}>{c.Role}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )

                    })}
                </Grid>
            </Card>
        </>


    );
}