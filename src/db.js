const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'restaurant_pos_development',
  'jxu',
  'chaconazo',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

// connect to database
sequelize.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
