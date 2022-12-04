const time = new Date;

exports.testToday = (req, res) => {
    res.status(200).send(time);
}