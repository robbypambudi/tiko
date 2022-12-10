import bcrypt from 'bcrypt';
import Joi from 'joi';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import connection from '@lib/db';
import formatedTimestamp from '@lib/formatdate';

type Data = {
  email: string;
};

type Password = {
  [key: string]: {
    password: string;
    id: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Validation
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
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

    const isFind = connection.query(
      `SELECT email FROM user WHERE email = '${req.body.email}'`,
      function (err, results) {
        if (err) {
          res.status(500).json({ error: err });
          return;
        }

        const data = results as Data[];

        if (data.length > 0) {
          return true;
        } else {
          return false;
        }
      }
    );
    if (!isFind) {
      const respond = {
        status: 400,
        message: 'Email not found',
      };
      res.status(400).json(respond);
      return;
    }

    const sql = `SELECT password,id FROM user WHERE email = '${req.body.email}'`;
    const data = connection.query(sql, function (err: any, results: Password) {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      let hash;
      bcrypt.compare(
        req.body.password,
        results[0].password,
        function (err, result) {
          if (err) {
            res
              .status(500)
              .json({ error: 'Internal server error', status: false });
            return;
          }
          hash = result;
        }
      );
      return hash;
    });
    res.status(200).json({ message: 'Berhasil login', status: data });

    if (status[0]) {
      const token = uuidv4();
      const sql = `INSERT INTO session ( user_id, token, expirate) VALUES ('${
        status[1]
      }', '${token}', '${formatedTimestamp(3)}')`;
      connection.query(sql, function (err) {
        if (err) {
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
        res.status(200).json({ message: 'Berhasil login', status: true });
      });
    }
    res.status(400).json({ message: 'Password salah' });
  }
}
