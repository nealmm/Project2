const Dining = require('./Dining');
const User = require('./User');
const Review = require('./Review');

// associations

// user has many reviews
User.hasMany(Review, {
    foreignKey: 'user_id'
});

// review belongs to user
Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// review belongs to dining
Review.belongsTo(Dining, {
    foreignKey: 'dining_id',
    onDelete: 'SET NULL'
});

// dining has many reviews
Dining.hasMany(Review, {
    foreignKey: 'review_id'
});

module.exports = { User, Dining, Review };