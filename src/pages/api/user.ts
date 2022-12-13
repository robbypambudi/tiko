// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

type Data = {
  id: number;
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connection.query(
    'SELECT *, user.id as user_id FROM user JOIN role ON user.role_id = role.id ',
    function (err, results) {
      if (err) {
        res.status(500).json({ error: err });
      }

      const data = results as Data[];

      res.status(200).json({
        status: true,
        message: 'Data berhasil ditampilkan',
        data: data,
      });
    }
  );
}
