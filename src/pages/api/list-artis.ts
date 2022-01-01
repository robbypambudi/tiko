// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connection.query('SELECT * FROM artis', function (err, results) {
    if (err) {
      res.status(500).json({ error: err });
    }

    const data = results;

    res.status(200).json({
      status: true,
      message: 'Data berhasil ditampilkan',
      data: data,
    });
  });
}
