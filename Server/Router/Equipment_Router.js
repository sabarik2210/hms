const express = require('express');
const Equipment_Route = express.Router();
const Equipment_func = require('../Modules/Equipment/Equipment');
const Equipment = new Equipment_func();

Equipment_Route.post('/Equipment/:action', function (req, res) {
    Equipment.Equip_Func(req, (err, result) => {
        if (err) {
            res.json({ 'status': false, 'message': err })
        }
        else {
            res.json({ 'status': true, 'message': result })
        }
    })
})



module.exports = Equipment_Route;