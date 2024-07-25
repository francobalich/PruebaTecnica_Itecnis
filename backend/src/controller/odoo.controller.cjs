const { response } = require('express');
const { Pool } = require('pg');
require('dotenv').config();

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: process.env.ODOO_USER,
  host: process.env.ODOO_HOST,
  database: process.env.ODOO_BD,
  password: process.env.ODOO_PWS,
  port: process.env.ODOO_PORT,
});


const queryProductTemplatesWithCategoryNames = async () => {
  console.log("Empezando conexion");
  const client = await pool.connect();
  console.log("Conectado");
  try {
    const queryText = `
      SELECT pt.name AS title,pt.list_price, pc.name AS category_name, pt.description FROM product_template pt
      LEFT JOIN product_category pc ON pt.categ_id = pc.id
      WHERE pt.categ_id IS NOT null and pt.list_price is not null
      LIMIT 100;`;
    const res = await client.query(queryText);
    return res.rows;
  } finally {
    client.release();
  }
}
// queryProductTemplatesWithCategoryNames()
//   .then((result) => {
//     console.log("Resultados de la consulta:", result);
//   })
//   .catch((error) => {
//     console.error("Error en la consulta:", error);
//   });

  module.exports={queryProductTemplatesWithCategoryNames}