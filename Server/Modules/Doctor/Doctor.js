const schema = require('../../Commonquerry');
const Doctor_schema = new schema();

function Doctor() {

    Doctor.prototype.Doc_Func = function (req, cbk) {
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

    Doctor.prototype.View = function (req, cbk) {
        let query = 'select * from Doctor'
        Doctor_schema.Retrive(query, (err, result) => {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
    Doctor.prototype.Create = function (req, cbk) {
        var query = `INSERT INTO Doctor SET ? `
        Doctor_schema.create(query, req.body, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            } else {
                cbk({ 'status': true, 'message': result })
                console.log(result);
            }
        });
    };

    Doctor.prototype.Delete = function (req, cbk) {
        let query = `delete from Doctor where DoctorID=?`
        Doctor_schema.delete(query, req.body.DoctorID, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }

    Doctor.prototype.update = function (req, cbk) {
        let DoctorID = req.body.DoctorID
        let query = `update  Doctor set ? where DoctorID=?`
        Doctor_schema.update(query, [req.body, DoctorID], function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
    Doctor.prototype.Viewbyid = function (req, cbk) {
        let query = `select * from Doctor where DoctorID=?`
        Doctor_schema.Viewbyid(query, req.body.DoctorID, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
}

module.exports = Doctor;