const express = require('express');
const Diagnosis_Route = express.Router();
const Diagnosis_func = require('../Modules/Diagnosis/Diagnosis');
const Diagnosis = new Diagnosis_func();

Diagnosis_Route.post('/Diagnosis/:action', function (req, res) {
    Diagnosis.Diag_Func(req, (err, result) => {
        if (err) {
            res.json({ 'status': false, 'message': err })
        }
        else {
            res.json({ 'status': true, 'message': result })
        }
    })
})



module.exports = Diagnosis_Route;