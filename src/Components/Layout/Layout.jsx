import React, {useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SideBarNew from '../Sidebar/SidebarNew'
import Routepath from '../Routes1'
import LoginNew from '../Login/LoginNew';
import { useContext } from 'react';
import { loginContext } from '../../App';
const Layout = () => {
    const {login, setLogin} = useContext(loginContext);
    return (
<>
            {login ? <div className="layout__content">
                <SideBarNew />
                <div className="layout__content-main">
                    <Routepath />
                </div>
            </div> :
                <Routes>
                    <Route path='/' element={<LoginNew/>} />
                </Routes>}
        </>
    )
}

export default Layout
