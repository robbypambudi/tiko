import bcrypt from 'bcrypt';
import Joi from 'joi';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import connection from '@lib/db';

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const schema = Joi.object({
      nama_depan: Joi.string().required(),
      nama_belakang: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      no_telp: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      const respond = {
        status: 400,
        message: error.details[0].message.toString(),
      };
      res.status(400).json(respond);
      return;
    }

    const data = {
      nama_depan: req.body.nama_depan,
      nama_belakang: req.body.nama_belakang,
      email: req.body.email,
      password: req.body.password,
      no_telp: req.body.no_telp,
    };

    const hash = await bcrypt
      .hash(data.password as string, 10)
      .then(function (hash) {
        return hash;
      });
    const id = uuidv4();
    const role = 1;
    const sql = `INSERT INTO user (id, nama_depan, nama_belakang, email, password, no_telp, role_id) VALUES ('${id}', '${data.nama_depan}', '${data.nama_belakang}', '${data.email}', '${hash}', '${data.no_telp}', '${role}')`;
    connection.query(sql, function (err) {
      if (err) {
        res.status(500).json('Gagal menambahkan data');
      }
      res.status(200).json('Berhasil menambahkan data');
    });
  }
}
