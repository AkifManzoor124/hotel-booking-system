const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const getBookings = () => {
  return sendQuery('SELECT * FROM del_2."Book"')
}

const getEmployees = () => {
  return sendQuery('SELECT * FROM del_2."Employee"')
}

const getParentHotel = () => {
  return sendQuery('SELECT * FROM del_2."Par_Hotel"')
}

const getRooms = () => {
  return sendQuery('SELECT * FROM del_2."Room"')
}

const getCustomers = () => {
  return sendQuery(`SELECT * FROM del_2."Customer"`)
}

const getHotel = () => {
  return sendQuery(`SELECT * FROM del_2."Hotel"`)
}

const sendQuery = (query) => {
  return new Promise(function (resolve, reject) {
    console.log(query)
    pool.query(query, (error, results) => {
      if (error) {
        console.error(error)
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

module.exports = {
  sendQuery,
  getBookings,
  getEmployees,
  getParentHotel,
  getHotel,
  getRooms,
  getCustomers
}