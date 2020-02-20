module.exports = {
  dialect:'postgres',
  host:'localhost',
  username:'postgres',
  password:'docker',
  database:'doe',
  define: {
    timestamp: true,
    underscored:true,
    underscoredAll:true,
  },
};