var express = require('express');
var router = express.Router();


const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'mysql-metamorfosys.alwaysdata.net',
  user: '364431_dev',
  password: 'pzj-jqh2EPR4rxm5bgr',
  database: "metamorfosys_mc_celulares"        
});


/* GET products listing. */
router.get('/', function(req, res, next) {
  
    // Fetch users from the database
    connection.query('SELECT * FROM products', (error, products) => {
        if (error) {
            console.error('Error fetching users from the database: ' + error.stack);
            return res.status(500).json({ error: 'Failed to fetch users' });
    }

    // Send the fetched data as a response
    res.json(products);
    });

});

// POST
router.post('/', (req, res) => {
    res.send('Got a POST request')
  })

// PUT
router.put('/product', (req, res) => {
    res.send('Got a PUT request at /product')
})

// DELETE
router.delete('/product', (req, res) => {
    res.send('Got a DELETE request at /product')
})

module.exports = router;
