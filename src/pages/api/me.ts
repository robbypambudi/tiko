// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

type Data = {
  id: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connection.query(
    `SELECT * FROM user where id = ${req.body.id}`,
    function (err, results) {
      if (err) {
        res.status(500).json({ error: err });
      }

      const data = results as Data[];

      res.status(200).json(data);
    }
  );
}
