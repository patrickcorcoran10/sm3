const db = require('../models');

module.exports = function(app) {
    app.get('/api/home', function(req, res) {
        db.sm.findAll({}).then(function(db) {
            res.json(db);
        });
    });
    // Form Page One Submits (Create Route)
    app.post("/api/submit", function(req, res) {
        db.moorhouses.create({
            companyName: req.body.companyName,
            totalEmployees: req.body.totalEmployees,
            hourlyCostPerEmployee: req.body.hourlyCostPerEmployee
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });
    // Form Page Two Submits (Update Route)
    app.put('/api/submit2:id', function(req, res) {
        db.sm.update({
            avgHoursCollecting: req.body.avgHoursCollecting,
            avgHoursAnalyzing: req.body.avgHoursAnalyzing,
            dataBreachRisk: req.body.dataBreachRisk, 
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbdataPoints) {
            res.json(dbDataPoints)
        });
    });
    // Form Page 3 Submits (Update Route)
    app.put('/api/submit3:id', function(req, res) {
        db.sm.update({
            email: req.body.email,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        })
    });
    // Delete Route for Opportunities Page
    app.delete('/api/delete:id', function(req, res) {
        db.sm.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        })
    });

}