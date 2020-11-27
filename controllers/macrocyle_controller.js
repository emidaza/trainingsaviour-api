const Macrocycle = require('../model/macrocycle_model');

exports.findAll = (req, res) => {
    Macrocycle.find()
        .sort({ name: -1 })
        .then((macrocycles) => {
            console.log("no deben haber macrociclos")
            res.status(200).send(macrocycles);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
};

exports.create = (req, res) => {
    /**
     * validation request
     */
    if (!req.body.name) {
        return res.status(400).send({
            message: "Required field can not be empty",
        });
    }
    /**
     * Create a macrocycle
     */
    const user = new Macrocycle({
        name: req.body.name,
        weekCount: req.body.weekCount,
        initDate: new Date(req.body.initDate),
        endDate: new Date(req.body.endDate)
    });
    /**
     * Save macrocycle to database
     */
    user
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User.",
            });
        });
};