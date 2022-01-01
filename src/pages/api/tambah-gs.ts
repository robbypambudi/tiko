// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

type Data = {
  event_id: string;
  artis_id: string;
  waktu_tampil: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sql = `INSERT INTO guest_star (event_id, artis_id, waktu_tampil) VALUES ('${req.body.event_id}', '${req.body.artis_id}', '${req.body.waktu_tampil}')`;
  connection.query(sql, function (err, results) {
    if (err) {
      res.status(500).json({ error: err });
    }

    const data = results as Data[];

    res.status(200).json({
      status: true,
      message: 'Data berhasil ditampilkan',
      data: data,
    });
  });
}
