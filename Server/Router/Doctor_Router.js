const express = require('express')
const Doctor_Route = express.Router();
const Doc_Func = require('../Modules/Doctor/Doctor')
const Doctor = new Doc_Func();

Doctor_Route.post('/Doctor/:action', function (req, res) {
    Doctor.Doc_Func(req, (err, result) => {
        if (err) {
            res.json({ 'status': false, 'message': err })
        }
        else {
            res.json({ 'status': true, 'message': result })
        }
    })
})
module.exports = Doctor_Route;