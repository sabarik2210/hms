const schema = require('../../Commonquerry');
const Equipment_schema = new schema();

function Equipment() {

    Equipment.prototype.Equip_Func = function (req, cbk) {
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

    Equipment.prototype.View = function (req, cbk) {
        let query = 'select * from equipment'
        Equipment_schema.Retrive(query, (err, result) => {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
    Equipment.prototype.Create = function (req, cbk) {
        var query = `INSERT INTO equipment SET ? `
        Equipment_schema.create(query, req.body, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            } else {
                cbk({ 'status': true, 'message': result })
                console.log(result);
            }
        });
    };

    Equipment.prototype.Delete = function (req, cbk) {
        let query = `delete from equipment where EquipID=?`
        Equipment_schema.delete(query, req.body.EquipID, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }

    Equipment.prototype.update = function (req, cbk) {
        let Equipment_id = req.body.EquipID
        let query = `update  equipment set ? where EquipID=?`
        Equipment_schema.update(query, [req.body, Equipment_id], function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
    Equipment.prototype.Viewbyid = function (req, cbk) {
        let query = `select * from equipment where EquipID=?`
        Equipment_schema.Viewbyid(query, req.body.EquipID, function (err, result) {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
    }
}

module.exports = Equipment;