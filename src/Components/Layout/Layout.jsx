import React, { useEffect } from 'react'



import { BrowserRouter, Route } from 'react-router-dom'
import SideBarNew from '../Sidebar/SidebarNew'
import Routes from '../Routes'



const Layout = () => {


    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className="layout__content">
                    <SideBarNew />
                    <div className="layout__content-main">
                        <Routes />
                    </div>
                </div>

            )} />
        </BrowserRouter>
    )
}

export default Layout
