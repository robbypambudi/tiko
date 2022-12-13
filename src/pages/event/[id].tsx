import Layout from '@layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { ApiReturn } from '@typ/api';
import { useRouter } from 'next/router';

import UnstyledLink from '@components/links/UnstyledLink';

import { mockQuery } from '@lib/apiMock';

type EventData = {
  id: string;
  nama_event: string;
  waktu_tampil: string;
  harga: string;
  tanggal: string;
  tempat: string;
  deskripsi: string;
  path_image: string;
  guest_star: string[];
};

export default function Daftar() {
  const router = useRouter();
  const { id } = router.query;

  const { data: eventData } = useQuery<ApiReturn<EventData[]>, Error>(
    ['/detail-event?id=' + id],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );
  if (!eventData) return <div>Loading...</div>;
  return (
    <Layout>
      <main>
        <section className='h-[70vh] bg-[url(/images/banner/banner.png)] bg-cover bg-no-repeat relative'>
          <div className='layout z-10'>
            <div className='bg-white absolute right-20 top-1/2 min-w-[400px] py-4 px-4 rounded-lg'>
              <p className='font-bold text-2xl'>
                {eventData.data[0].nama_event}
              </p>
              <p className='ml-5 text-lg mt-4'>
                {eventData.data[0].tanggal.slice(0, 10)}
              </p>
              <p className='ml-5 text-lg mt-4'>{eventData.data[0].tempat}</p>
              <div className='flex items-center justify-center mt-10 '>
                <UnstyledLink
                  className='bg-violet-500 text-white px-4 py-2 rounded-md'
                  href={`/daftar/${eventData.data[0].id}`}
                >
                  Beli Tiket
                </UnstyledLink>
              </div>
            </div>
            <p className='absolute top-[10%] font-bold rounded-r-full text-white left-0 pl-10 bg-violet-600 text-2xl px-4 py-2'>
              Rp. {eventData?.data[0].harga}
            </p>
          </div>
        </section>
        <section className='h-[50vh]'>
          <div className='layout'>
            <p className='bg-violet-500 mt-20 inline-flex px-4 py-2 rounded-lg'>
              Deskripsi
            </p>
            <p>{eventData.data[0].deskripsi}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
