import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboardpage from '../Pages/Dashboard'
import DoctorPage from '../Pages/DoctorTable'
import Patient from '../Pages/PatientTable'
import InvoiceTable from '../Pages/InvoiceTable'
import PrintInvoice from '../Pages/printpage'
import DoctorField from '../Pages/Form/DoctorForm'
import PatientField from '../Pages/Form/PatientForm'
import InvoiceBill from '../Pages/Form/Bill_InvoiceForm.jsx'
import Equipment from '../Pages/EquipmentTable'
import DiagnosisField from '../Pages/Form/DiagnosisForm'
import Diagnosis from '../Pages/DiagnosisTable'
import EquipmentField from '../Pages/Form/EquipmentForm'

const Routes1 = () => {

    return (
        <Routes>
            <Route path='/' element={<Dashboardpage />} />
            <Route path='/Doctor' element={<DoctorPage />} />
            <Route path='/Patient' element={<Patient />} />
            <Route path='/Equipment' element={<Equipment />} />
            <Route path='/Diagnosis' element={<Diagnosis />} />
            <Route path='/Invoice' element={<InvoiceTable />} />

            {/*===================== Forms Routers======================= */}
            <Route path='/Doctor/DoctorForm' element={<DoctorField />} />
            <Route path='/Doctor/DoctorForm/:action/:id' element={<DoctorField />} />

            <Route path='/Patient/PatientForm' element={<PatientField />} />
            <Route path='/Patient/PatientForm/:action/:id' element={<PatientField />} />

            <Route path='/Diagnosis/DiagnosisForm' element={<DiagnosisField />} />
            <Route path='/Diagnosis/DiagnosisForm/:action/:id' element={<DiagnosisField />} />

            <Route path='/Equipment/EquipmentForm' element={<EquipmentField />} />
            <Route path='/Equipment/EquipmentForm/:action/:id' element={<EquipmentField />} />

            <Route path='/Invoice/InvoiceForm/:action/:id' exact element={<InvoiceBill />} />
            <Route path='/Invoice/InvoiceForm' exact element={<InvoiceBill />} />

            <Route path='/printpage/:id' exact element={<PrintInvoice />} />
            {/*===================== Forms Routers======================= */}

        </Routes>
    )
}

export default Routes1;
