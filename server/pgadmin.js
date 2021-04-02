const Pool = require('pg').Pool
const pool = new Pool({
  user: 'amanz091',
  host: 'web0.eecs.uottawa.ca',
  database: 'group_b01_g54',
  password: 'Compaqs710',
  port: 15432,
});

const getEmployees = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';", (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const getRooms = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM rooms", (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const sendQuery = (query) => {
  return new Promise(function (resolve, reject) {
    console.log(query)
    pool.query(query, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

module.exports = {
  getEmployees,
  sendQuery,
  getRooms
}