module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'doe',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  };