module.exports = function(sequelize, DataTypes) {
    const sm = sequelize.define('moorhouse', {
        companyName: {type: DataTypes.STRING, allowNull: false},
        totalEmployees: {type: DataTypes.INTEGER, allowNull: false},
        hourlyCostPerEmployee: {type: DataTypes.INTEGER, allowNull: false},
        avgHoursCollecting: {type: DataTypes.INTEGER, allowNull: true},
        avgHoursAnalyzing: {type: DataTypes.INTEGER, allowNull: true},
        dataBreachRisk: {type: DataTypes.STRING, allowNull: true},
        avgEmailTraffic: {type: DataTypes.INTEGER, allowNull: true},
        email: {type: DataTypes.STRING, allowNull: true}
    });
    return sm;
}