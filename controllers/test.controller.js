const db = require("../models");
const { user: User, role: Role } = db;

const time = new Date;

exports.testToday = (req, res) => {
    res.status(200).send(time);
}

exports.findAll = (req, res) => {
    User.find()
        .then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error HUY ZNAET KAKAYA"
            });
        });


}

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
};