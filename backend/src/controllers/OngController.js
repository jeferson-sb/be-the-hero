const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

async function create(req, res) {
  const { name, email, whatsapp, city, uf } = req.body;
  const checkOngExists = await connection('ongs')
    .where({
      name,
      email,
      whatsapp
    })
    .select('*');
  if (checkOngExists) {
    return res.status(400).json({ error: 'Ong already exists!' });
  }
  const id = crypto.randomBytes(4).toString('HEX');
  await connection('ongs').insert({ id, name, email, whatsapp, city, uf });
  return res.status(201).json({ id });
}

async function index(req, res) {
  const ongs = await connection('ongs').select('*');
  return res.json(ongs);
}

module.exports = { index, create };
