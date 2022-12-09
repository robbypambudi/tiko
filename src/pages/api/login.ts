import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

type Data = {
  email: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isFind = connection.query(
    `SELECT email FROM user WHERE email = '${req.body.email}'`,
    function (err, results) {
      if (err) {
        res.status(500).json({ error: err });
      }

      const data = results as Data[];

      if (data.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  );

  if (isFind) {
    const isPassword = connection.query(
      `SELECT password FROM user WHERE email = '${req.body.email}'`,
      function (err, results) {
        if (err) {
          res.status(500).json({ error: err });
        }

        const data = results as Data[];

        if (data.length > 0) {
          return true;
        } else {
          return false;
        }
      }
    );
  }
}
