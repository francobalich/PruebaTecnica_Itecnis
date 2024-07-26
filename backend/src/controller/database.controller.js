import mysql from 'mysql2/promise';
import { dbConfig } from '../utils/dbConfig.js';
import { queryProductTemplatesWithCategoryNames } from './odoo.controller.cjs';

async function connectToDatabase() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

const readOdooData = async()=>{
  const resp= await queryProductTemplatesWithCategoryNames()
  let data = []
  console.log(resp[0]);
  resp.forEach(element => {
    data.push(
      {
      ...element,
      imageUrl:"https://random.imagecdn.app/500/500"
    }
    )
  });
  return data;
}

export async function getAllProductsOfDB() {
  const connection = await connectToDatabase()
  try {
    const [rows, fields] = await connection.execute('SELECT * FROM challengeitecnis.products');
    if(rows.length===0){
      const resp = await readOdooData()
      console.log(resp);
      resp.forEach(async (element) => {
        await saveProducts(element)
      })
    }
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
    const query = `INSERT INTO  challengeitecnis.products (id,title, category, imageUrl, price, products.description) VALUES ('0','${product.title}', '${product.category}', '${product.imageUrl}', '${product.price}', '${product.description}');`
    const [rows, fields] = await connection.execute(query);
    return rows
  } catch (err) {
    console.error('Error de consulta: ' + err.stack);
  } finally {
    await connection.end();
  }
}
export const getProductsOfDB = async (page=1) => {
  const offset = page*12;
  const connection = await connectToDatabase()
  try {
    const [rows, fields] = await connection.execute(`SELECT * FROM challengeitecnis.products LIMIT 12 OFFSET ${offset}`);
    if(rows.length===0){
      const resp = await readOdooData()
      console.log(resp);
      resp.forEach(async (element) => {
        await saveProducts(element)
      })
    }
    return rows
  } catch (err) {
    console.error('Error de consulta: ' + err.stack);
  } finally {
    await connection.end();
  }
}

export const buyProductOfDB = async (productId) => {
  const connection = await connectToDatabase();
  try {
      const [rows] = await connection.execute(`SELECT title,stock FROM challengeitecnis.products WHERE id = ?`, [productId]);
      if (rows.length === 0) {
          return 'Producto no encontrado';
      }
      const product = rows[0];
      if (product.stock > 0) {
          await connection.execute(`UPDATE challengeitecnis.products SET stock = stock - 1 WHERE id = ?`, [productId]);
          return `Compraste de "${product.title}".\n Stock restante: ${product.stock - 1}`
      } else {
          return'Producto sin stock.';
      }
  } catch (err) {
      console.error('Error al comprar producto: ' + err.stack);
  } finally {
      await connection.end();
  }
};