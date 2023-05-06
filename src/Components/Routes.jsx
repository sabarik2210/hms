import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Dashboardpage from '../Pages/Dashboard'
import DoctorPage from '../Pages/Doctor'
import Invoiceform from '../Pages/InvoiceForm'

// import Dashboard from '../pages/Dashboard'


const Routes = () => {

    return (
        <Switch>
            <Route path='/' component={Dashboardpage} />
            <Route path='/Doctor' component={DoctorPage} />
            <Route path='/Invoice' component={Invoiceform} />
        </Switch>
    )
}

export default Routes
