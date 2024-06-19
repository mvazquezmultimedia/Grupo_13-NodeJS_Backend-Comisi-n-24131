var mysql = require('mysql');

config = {
    host: 'mysql-metamorfosys.alwaysdata.net',
    user: '364431_dev',
    password: 'pzj-jqh2EPR4rxm5bgr',
    database: "metamorfosys_mc_celulares"
}

var connection =mysql.createConnection(config); //added the line
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully to DB.');
});

module.exports ={
    connection : mysql.createConnection(config) 
} 