// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

type Data = {
  id: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sql = `SELECT * FROM event WHERE id = ${req.query.id}`;
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
