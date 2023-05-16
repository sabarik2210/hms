const schema = require('../../Commonquerry');
const Patient_schema = new schema();

function Patient() {

    Patient.prototype.C_Func = function (req, cbk) {
        const action = req.params.action;
        const self = this;
        switch (action) {
            case 'view':
                self.View(req, cbk)
                break;
            case 'viewbyid':
                self.Viewbyid(req, cbk)
                break;
            case 'create':
                self.Create(req, cbk)
                break;
            case 'delete':
                self.Delete(req, cbk)
                break;
            case 'update':
                self.update(req, cbk)
                break;
            default:
                cbk(Status = 'false', err = 'not uploaded')
        }
    }

    Patient.prototype.View = function (req, cbk) {
        let query = 'select * from patient'
        Patient_schema.Retrive(query, (err, result) => {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
    Patient.prototype.Create = function (req, cbk) {

        var query = `INSERT INTO patient SET ? `
        Patient_schema.create(query, req.body, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            } else {
                cbk({ 'status': true, 'message': result })
            }
        });
    };

    Patient.prototype.Delete = function (req, cbk) {

        let query = `delete from patient where PatientID=?`
        Patient_schema.delete(query, req.body.PatientID, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }

    Patient.prototype.update = function (req, cbk) {
        let Patient_id = req.body.PatientID
        let query = `update  patient set ? where PatientID=?`
        Patient_schema.update(query, [req.body, Patient_id], function (err, result) {

            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {

                cbk({ 'status': true, 'message': result })
            }
        })
    }
    Patient.prototype.Viewbyid = function (req, cbk) {
        let query = `select * from patient where PatientID=?`
        Patient_schema.Viewbyid(query, req.body.PatientID, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
}

module.exports = Patient;