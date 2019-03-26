const db = require('../models');

module.exports = function(app) {
    app.get('/api/home', function(req, res) {
        db.sm3.findAll({}).then(function(db) {
            res.json(db);
        });
    });
}