/* eslint-disable unused-imports/no-unused-vars */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Layout from '@layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { ApiReturn } from '@typ/api';
import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';

import SEO from '@components/Seo';

import { mockQuery } from '@lib/apiMock';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import Swiper and modules styles
import 'swiper/css';

type SearchForm = {
  search: string;
};

type ArtisData = {
  id: number;
  nama: string;
  waktu_tampil: string;
  nama_event: string;
  date: string;
  tanggal: string;
  path_image: string;
};

/**
 *   "id": "2",
    "nama_event": "Schematics Reeva ITS",
    "waktu_tampil": "00:00:21",
    "harga": "200000",
    "tanggal": "2022-12-11T17:00:00.000Z",
    "path_image": "/images/event/event-2.png",
    "guest_star": [
      "Juicy Luicy",
      "The Overtunes",
      "JKT 48"
    ]
 */
type EventData = {
  id: string;
  nama_event: string;
  waktu_tampil: string;
  harga: string;
  tanggal: string;
  path_image: string;
  guest_star: string[];
};

const events = [
  {
    id: 1,
    title: 'The Greatest Showman',
    date: '2021-10-10',
    waktu_tampil: '10:00',
    image: '/images/event-1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
];

export default function Home() {
  // Form Provider
  const methods = useForm<SearchForm>({
    mode: 'onTouched',
  });

  const { handleSubmit, watch } = methods;

  const search = watch('search');

  const event = React.useMemo(() => {
    if (search) {
      return events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return events;
  }, [search]);

  const onSubmit = (data: SearchForm) => {};
  const url = 'http://localhost:3000/api/artis';

  const { data: queryData } = useQuery<ApiReturn<ArtisData[]>, Error>(
    ['/artis'],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );
  const { data: eventData } = useQuery<ApiReturn<EventData[]>, Error>(
    ['/events'],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );

  if (!queryData && !eventData?.data) return <div>Loading...</div>;

  return (
    <Layout>
      <SEO title='Home' />

      <main className='min-h-screen'>
        <section
          id='hero'
          className='bg-[url(/images/hero.png)] flex items-center h-screen'
        >
          <div className='space-y-2 layout'>
            <h1 className='text-8xl text-white'>Tiko</h1>
            <p className='text-white text-4xl font-medium'>
              Watch the most magnificant concert you&apos;ve never seen
            </p>
            <p className='font-tertiary text-white text-2xl font-light'>
              Get your chance to see the most increadible concert you&apos;ve
              never seen in your life before
            </p>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex space-x-2'
              ></form>
            </FormProvider>
          </div>
        </section>
        <section id='populer' className='h-screen'>
          <div className='layout'>
            <div className='pt-20'>
              <h2 className='font-secondary font-bold text-5xl'>
                Populer saat ini
              </h2>
              <p className='mt-6'>Ayo cari dan tonton artis favoritmu!!</p>
              <div className='mx-auto'>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log('slide change')}
                >
                  {queryData?.data.map((artis) => (
                    <SwiperSlide key={artis.id}>
                      <div className='flex flex-col items-center relative border shadow-md rounded-xl px-2 py-1 bg-slate-200'>
                        <Image
                          src={'/images' + artis.path_image}
                          alt={artis.nama}
                          width='100'
                          height='100'
                          className='w-full z-0'
                        />
                        <div className='absolute z-10 backdrop-blur-sm px-4 py-2 text-white bottom-2 w-full flex gap-3 items-center justify-between'>
                          <div>
                            <h1 className='text-2xl'>{artis.nama}</h1>
                            <p>{artis.tanggal.slice(0, 10)}</p>
                          </div>
                          <p>{artis.waktu_tampil}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section id='event' className='h-screen footer-gradient'>
          <div className='layout'>
            <div className='pt-20'>
              <h2 className='font-secondary font-bold text-5xl'>
                Event saat ini{' '}
              </h2>
              <p className='text-2xl font-medium mt-2'>
                Ada berbagai event saat ini lho, jangan sampai ketinggalan!!
              </p>
              <div className='mx-auto mt-6'>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log('slide change')}
                >
                  {eventData?.data.map((event) => (
                    <SwiperSlide key={event.id}>
                      <div className='flex flex-col items-center relative border shadow-md rounded-xl px-2 py-1 bg-slate-200'>
                        <p className='absolute z-10 left-0 top-5 font-bold bg-violet-600 rounded px-4 rounded-r-full text-white'>
                          Rp.{event.harga}
                        </p>
                        <Image
                          src={event.path_image}
                          alt={event.nama_event}
                          width='100'
                          height='100'
                          className='w-full z-0'
                        />
                        <div className='absolute z-10 backdrop-blur-sm px-4 py-2 text-white bottom-0 w-full flex gap-3 items-center justify-between'>
                          <div>
                            <h1 className='text-xl'>{event.nama_event}</h1>
                            <ul className='ml-3'>
                              {event.guest_star.map((artis) => (
                                <li key={artis}>{artis}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p>{event.tanggal.slice(0, 10)}</p>
                            <p>{event.waktu_tampil}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
