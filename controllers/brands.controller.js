// Import connection con la DB
var config = require('../db/config.js');
var connection = config.connection

// METHOD GET ALL BRANDS
// /brands
const index = (req, res) => {
    
  const sql = "SELECT * FROM brands";

  connection.query(sql, (error, brands) => {
    if (error) {
      console.error('Error fetching brands from the database: ' + error.stack);
      return res.status(500).json({ error: "'Failed to fetch brands'" });
    }
    res.json(brands);
  });

};

module.exports = {
    index
};