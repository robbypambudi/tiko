// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

type Data = {
  id: number;
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sql = `SELECT * FROM artis ORDER BY pengemar DESC LIMIT 5`;
  connection.query(sql, function (err, results) {
    if (err) {
      res.status(500).json({ error: err });
    }

    const data = results as Data[];

    res.status(200).json(data);
  });
}
