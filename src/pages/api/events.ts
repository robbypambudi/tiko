// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connection from '@lib/db';

type Data = {
  waktu_tampil: string;
  harga: string;
  tanggal: string;
  path_image: string;
  nama_event: string;
  id: number;
  nama: string;
};

type eventData = {
  id: number;
  nama_event: string;
  waktu_tampil: string;
  harga: string;
  tanggal: string;
  path_image: string;
  guest_star: string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Menampilkan Event dan juga Guest Star
  const sql = `SELECT event.id ,event.nama_event, guest_star.waktu_tampil,
  event.harga, event.tanggal, event.path_image, artis.nama FROM guest_star 
  JOIN event ON guest_star.event_id = event.id JOIN artis on artis.id = artis_id 
  ORDER BY event.tanggal LIMIT 10;`;
  connection.query(sql, function (err, results) {
    if (err) {
      res.status(500).json({ error: err });
    }

    const data = results as Data[];
    // Menyusun guest start menjadi json
    const events: eventData[] = data.reduce((acc: eventData[], cur) => {
      const event = acc.find((item) => item.id === cur.id);
      if (event) {
        event.guest_star.push(cur.nama);
      } else {
        acc.push({
          id: cur.id,
          nama_event: cur.nama_event,
          waktu_tampil: cur.waktu_tampil,
          harga: cur.harga,
          tanggal: cur.tanggal,
          path_image: cur.path_image,
          guest_star: [cur.nama],
        });
      }
      return acc;
    }, []);

    res.status(200).json({
      status: true,
      message: 'Data berhasil ditampilkan',
      data: events,
    });
  });
}
