import mysql from 'mysql2/promise';
import { dbConfig } from '../utils/dbConfig.js';

async function connectToDatabase() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

export async function getAllProducts() {
  const connection = await connectToDatabase()
  try {
    const [rows, fields] = await connection.execute('SELECT * FROM challengeitecnis.products');
    return rows
  } catch (err) {
    console.error('Error de consulta: ' + err.stack);
  } finally {
    await connection.end();
  }
}

export async function saveProducts(product) {
  const connection = await connectToDatabase()
  try {
    const query = `INSERT INTO  challengeitecnis.products (id,title, category, imageUrl, price, products.description) VALUES ('0','${product.titulo}', '${product.categoria}', '${product.imagen}', '${product.precio}', '${product.descripcion}');`
    const [rows, fields] = await connection.execute(query);
    return rows
  } catch (err) {
    console.error('Error de consulta: ' + err.stack);
  } finally {
    await connection.end();
  }
}
