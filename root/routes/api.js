const router = require('express').Router();
const Employee = require('../models/employee.js');

router.route('/api/employee').get((req, res) => {
    Employee.find({})
        .then(dbEmployee => {
            res.json(dbEmployee);
        })
        .catch(err => {
            res.status(404).json(err);
        })
});

router.route('/api/employee/:id').get(({body, params}, res) => {
    Employee.findById(params.id)
        .then(dbEmployee => {
            res.json(dbEmployee);
        })
        .catch(err => {
            res.status(404).json(err);
        })
})

router.route('/api/add').post(({body}, res) => {
    Employee.create(body)
        .then(dbEmployee => {
            res.json(dbEmployee);
        })
        .catch(err => {
            res.status(404).json(err);
        })
});

module.exports = router;