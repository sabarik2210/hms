const express = require('express');
const patient_Route = express.Router();
const patient_func = require('../Modules/Patient/Patient');
const patient = new patient_func();

patient_Route.post('/patient/:action', function (req, res) {
    patient.C_Func(req, (err, result) => {
        if (err) {
            res.json({ 'status': false, 'message': err })
        }
        else {
            res.json({ 'status': true, 'message': result })
        }
    })
})



module.exports = patient_Route;