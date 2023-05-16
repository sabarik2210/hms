const schema = require('../../Commonquerry');
const Diagnosis_schema = new schema();

function Diagnosis() {

    Diagnosis.prototype.Diag_Func = function (req, cbk) {
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

    Diagnosis.prototype.View = function (req, cbk) {
        let query = 'select * from diagnosis'
        Diagnosis_schema.Retrive(query, (err, result) => {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
    Diagnosis.prototype.Create = function (req, cbk) {
        var query = `INSERT INTO diagnosis SET ? `
        Diagnosis_schema.create(query, req.body, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            } else {
                cbk({ 'status': true, 'message': result })
                console.log(result);
            }
        });
    };

    Diagnosis.prototype.Delete = function (req, cbk) {
        let query = `delete from diagnosis where DiagnosisID=?`
        Diagnosis_schema.delete(query, req.body.DiagnosisID, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }

    Diagnosis.prototype.update = function (req, cbk) {
        let Diagnosis_id = req.body.DiagnosisID
        let query = `update  diagnosis set ? where DiagnosisID=?`
        Diagnosis_schema.update(query, [req.body, Diagnosis_id], function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
    Diagnosis.prototype.Viewbyid = function (req, cbk) {
        let query = `select * from diagnosis where DiagnosisID=?`
        Diagnosis_schema.Viewbyid(query, req.body.DiagnosisID, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
}

module.exports = Diagnosis;