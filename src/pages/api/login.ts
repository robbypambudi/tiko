import bcrypt from 'bcrypt';
import Joi from 'joi';
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

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

    connection.query(
      `SELECT email FROM user WHERE email = '${req.body.email}'`,
      function (err, results) {
        if (err) {
          res.status(500).json({ error: err });
          return;
        }

        const data = results as Data[];

        if (data.length > 0) {
          const sql = `SELECT password,id FROM user WHERE email = '${req.body.email}'`;

          connection.query(sql, function (err: any, results: Password) {
            if (err) {
              res.status(500).json({ error: 'Internal server error' });
              return;
            }
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
                if (result) {
                  res.status(200).json({
                    status: true,
                    id: results[0].id,
                  });
                }
                if (!result) {
                  res.status(400).json({
                    status: false,
                    message: 'Password is wrong',
                  });
                }
              }
            );
          });
        } else {
          const respond = {
            status: 400,
            message: 'Email not found',
          };
          res.status(400).json(respond);
          return;
        }
      }
    );
  }
}
