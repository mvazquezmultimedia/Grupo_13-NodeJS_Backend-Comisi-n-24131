// Import connection con la DB
var config = require('../db/config.js');
var connection = config.connection

const index = (req, res) => {
    
    const sql = "SELECT * FROM products";

    connection.query(sql, (error, products) => {
      if (error) {
        console.error('Error fetching products from the database: ' + error.stack);
        return res.status(500).json({ error: "'Failed to fetch products'" });
      }
      res.json(products);
    });
  
};

const update = (req, res) => {
    const { id } = req.params;
    const { name, description, model, price } = req.body;
  
    const sql =
      "UPDATE products SET name = ?, description = ?, model = ?, price = ? WHERE id = ?";
      connection.query(sql, [name, description, model, price , id], (error, result) => {
      console.log(result);
      if (error) {
        console.error('Error fetching products from the database: ' + error.stack);
        return res.status(500).json({ error: "Failed to fetch products" });
      }
  
      if (result.affectedRows == 0) {
        return res.status(404).send({ error: "Product not exists" });
      }
  
      const product = { ...req.body, ...req.params };
  
      res.json(product);
    });
  };
  
  
  const destroy = (req, res) => {
    const { id } = req.params;
  
    let sql = "SELECT * FROM products WHERE id = ?";
    connection.query(sql, [id], (error, products) => {
      if (error) {
        console.error('Error fetching products from the database: ' + error.stack);
        return res.status(500).json({ error: "Failed to fetch products" });
      }
  
      if (products.length == 0) {
        return res.status(404).send({ error: "Product not exists" });
      }
  
    });
  
    sql = "DELETE FROM products WHERE id = ?";
    connection.query(sql, [id], (error, result) => {
      // console.log(result);
      if (error) {
        console.error('Error fetching products from the database: ' + error.stack);
        return res.status(500).json({ error: "'Failed to detele product'" });
      }
  
      if (result.affectedProducts == 0) {
        return res.status(404).send({ error: "Product not exists" });
      }
  
      res.json({ mensaje: "Deleted product" });
    });
  };

  const show = (req, res) => {
    const { id } = req.params;
  
    const sql = "SELECT * FROM products WHERE id = ?";
    connection.query(sql, [id], (error, product) => {
      // console.log(rows);
      if (error) {
        console.error('Error fetching product from the database: ' + error.stack);
        return res.status(500).json({ error: "'Failed to fetch product'" });
      }
  
      if (product.length == 0) {
        return res.status(404).send({ error: "Product not exists" });
      }
  
      res.json(product[0]);
    });
  };

module.exports = {
    index,
    show,
    update,
    destroy,
    // create
  };