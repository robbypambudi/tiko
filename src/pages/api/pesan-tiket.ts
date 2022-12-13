// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Joi from 'joi';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import connection from '@lib/db';

type Data = {
  nama_depan: string;
  nama_belakang: string;
  email: string;
  no_telp: string;
  nik: string;
  event_id: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  wa_chat: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const schema = Joi.object({
    nama_depan: Joi.string().required(),
    nama_belakang: Joi.string().required(),
    email: Joi.string().required(),
    event_id: Joi.string().required(),
    no_telp: Joi.string().required(),
    nik: Joi.string().required(),
    tanggal_lahir: Joi.string().required(),
    jenis_kelamin: Joi.string().required(),
    wa_chat: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json(error);
  }

  const id = uuidv4();
  const sql = `INSERT INTO pesanan_tiket (id, nama_depan, nama_belakang, email, no_telp, nik, tanggal_lahir, wa_chat, jenis_kelamin) VALUES ('${id}','${req.body.nama_depan}','${req.body.nama_belakang}','${req.body.email}','${req.body.no_telp}','${req.body.nik}','${req.body.tanggal_lahir}','${req.body.wa_chat}','${req.body.jenis_kelamin}')`;
  connection.query(sql, function (err, results) {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }
    const sql2 = `INSERT INTO peserta_event (event_id ) VALUES ('${req.body.event_id}')`;
    connection.query(sql2, function (err, results) {
      if (err) {
        res.status(500).json({ error: err });
      }
      const data = results as Data[];
      res.status(200).json(data);
    });
  });
}
