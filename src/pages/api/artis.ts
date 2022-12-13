// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // MENAMPILAN ARTIS TERPOPULEN DAN ACARA YANG TERDEKE
  const sql = `SELECT nama_event, event.tanggal,artis.nama, event.id, guest_star.waktu_tampil, 
  artis.pengemar, artis.path_image FROM artis JOIN guest_star on 
  guest_star.artis_id = artis.id JOIN event ON event.id = guest_star.event_id
  ORDER BY pengemar DESC LIMIT 5;`;

  connection.query(sql, function (err, results) {
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
