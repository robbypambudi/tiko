// get the client
import mysql from 'mysql2';
// create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'tiko',
  database: 'tiko',
  password: 'tikotiko',
});

export default connection;
