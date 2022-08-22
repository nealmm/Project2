const Dining = require('./Dining');
const User = require('./User');
const Review = require('./Review');

// associations

// user has many reviews
User.hasMany(Review, {
    foreignKey: 'user_id'
});

// dining belongs to many users
Dining.belongsToMany(User, {
    foreignKey: 'dining_id'
});

// dining belongs to many reviews
Dining.belongsToMany(Review, {
    foreignKey: 'dining_id'
});


module.exports = { User, Dining, Review };