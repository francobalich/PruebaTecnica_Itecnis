const { response } = require('express');
const { Pool } = require('pg');
require('dotenv').config();

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: process.env.ODOO_USER,
  host: process.env.ODOO_HOST,
  database: process.env.ODOO_DATABASE,
  password: process.env.ODOO_PWS,
  port: process.env.ODOO_PORT,
});

const getData = (req, res = response) => {
  try {
    return res.status(400).json({
      status: "Ok",
      message: "Code not implemented"
    })
  }
  catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}

const queryProductTemplatesWithCategoryNames = async () => {
  console.log("Empezando conexion");
  const client = await pool.connect();
  console.log("Conectado");
  try {
    const queryText = `
      SELECT pt.*, pc.name AS category_name
      | FROM product_template pt
      LEFT JOIN product_category pc ON pt.categ_id = pc.id
      WHERE pt.categ_id IS NOT null and pt.list_price is not null
      LIMIT 400;`;
    const res = await client.query(queryText);
    return res.rows;
  } finally {
    client.release();
  }
}
queryProductTemplatesWithCategoryNames()
  .then((result) => {
    console.log("Resultados de la consulta:", result);
  })
  .catch((error) => {
    console.error("Error en la consulta:", error);
  });

  module.exports={queryProductTemplatesWithCategoryNames}