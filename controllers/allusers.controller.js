const db = require("../models");
const { user: User, role: Role } = db;

exports.allUsers = (req, res) => {
    User.find()
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
