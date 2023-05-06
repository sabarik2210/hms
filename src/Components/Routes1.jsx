import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboardpage from '../Pages/Dashboard'
import DoctorPage from '../Pages/Doctor'
import Invoiceform from '../Pages/InvoiceForm'
import LoginNew from './Login/LoginNew'
// import Dashboard from '../pages/Dashboard'


const Routes1 = () => {

    return (
        <Routes>
            <Route path='/' element={<Dashboardpage />} />
            <Route path='/Doctor' element={<DoctorPage/>} />
            {/* <Route path='/Invoice' element={<Invoiceform/>} /> */}
        </Routes>
    )
}

export default Routes1;
