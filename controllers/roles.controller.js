const db = require("../models");
const { role: Role } = db;

exports.allRoles = (req, res) => {
    Role.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error HUY ZNAET KAKAYA"
            });
        });
}