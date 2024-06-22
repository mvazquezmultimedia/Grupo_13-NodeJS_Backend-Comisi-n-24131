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
    // const { id } = req.params;
    // const { nombre, precio, stock } = req.body;
  
    // const sql =
    //   "UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?";
    // db.query(sql, [nombre, precio, stock, id], (error, result) => {
    //   console.log(result);
    //   if (error) {
    //     return res.status(500).json({ error: "Intente mas tarde" });
    //   }
  
    //   if (result.affectedRows == 0) {
    //     return res.status(404).send({ error: "No existe el producto" });
    //   }
  
    //   const producto = { ...req.body, ...req.params };
  
    //   res.json(producto);
    // });
  };
  
  const destroy = (req, res) => {
    // const { id } = req.params;
  
    // let sql = "SELECT * FROM products WHERE id = ?";
    // db.query(sql, [id], (error, rows) => {
    //   if (error) {
    //     return res.status(500).json({ error: "Intente mas tarde" });
    //   }
  
    //   if (rows.length == 0) {
    //     return res.status(404).send({ error: "No existe el producto" });
    //   }
  
    //   fs.unlinkSync(path.resolve(__dirname, "../public/uploads", rows[0].imagen));
    // });
  
    // sql = "DELETE FROM productos WHERE id = ?";
    // db.query(sql, [id], (error, result) => {
    //   // console.log(result);
    //   if (error) {
    //     return res.status(500).json({ error: "Intente mas tarde" });
    //   }
  
    //   if (result.affectedRows == 0) {
    //     return res.status(404).send({ error: "No existe el producto" });
    //   }
  
    //   res.json({ mensaje: "Producto eliminado" });
    // });
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