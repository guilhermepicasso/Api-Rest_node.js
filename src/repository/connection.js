import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dwAula'
  });

console.log('Conexão feita');
export default con;