module.exports = function(sequelize, DataTypes) {
    const sm3 = sequelize.define('moorhouseprojects3', {
        companyName: {type: DataTypes.STRING, allowNull: false},
        totalEmployees: {type: DataTypes.INTEGER, allowNull: false},
        hourlyCostPerEmployee: {type: DataTypes.INTEGER, allowNull: false},
        avgHoursCollecting: {type: DataTypes.INTEGER, allowNull: false},
        avgHoursAnalyzing: {type: DataTypes.INTEGER, allowNull: false},
        dataBreachRisk: {type: DataTypes.STRING, allowNull: false},
        avgEmailTraffic: {type: DataTypes.INTEGER, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false}
    });
    return sm3;
}