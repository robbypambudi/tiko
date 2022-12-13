// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import connection from '@lib/db';
type Data = {
  id: string;
  nama_event: string;
  tempat: string;
  tanggal: string;
  harga: string;
  user_id: string;
  path_image: string;
  deskripsi: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = uuidv4();
  const sql = `INSERT INTO event (id, nama_event, tempat, tanggal, harga, user_id, path_image, deskripsi) VALUES ('${id}', '${req.body.nama_event}', '${req.body.tempat}', '${req.body.tanggal}', '${req.body.harga}', '${req.body.user_id}', '${req.body.path_image}', '${req.body.deskripsi}')`;
  connection.query(sql, function (err, results) {
    if (err) {
      res.status(500).json({ error: err });
    }

    const data = results as Data[];

    res.status(200).json(data);
  });
}
