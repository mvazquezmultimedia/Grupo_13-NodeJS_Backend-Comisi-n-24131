var express = require('express');
var router = express.Router();

// Import connection con la DB
var config = require('../db/config.js');
var connection = config.connection

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
router.post('/:id', (req, res) => {
    res.send('Got a POST request to create products')
  })

// PUT
router.put('/:id', (req, res) => {
    res.send('Got a PUT request to update a product')
})

// DELETE
router.delete('/:id', (req, res) => {
    res.send('Got a DELETE request to delete a product')
})

module.exports = router;
