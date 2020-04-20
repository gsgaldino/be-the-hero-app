const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*')

    return res.json(ongs)
  },
  
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX'); // create a randombyte to be the ONG ID

    //insert ONG into database with your new ID
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf

    })
    //Return a JSON data with new ONG id
    res.json({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
  }
}