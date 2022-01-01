import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Layout from '@layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { ApiReturn } from '@typ/api';
import { v4 as uuidv4 } from 'uuid';

import Input from '@components/forms/Input';
import SelectInput from '@components/forms/SelectInput';

import { mockQuery } from '@lib/apiMock';
import api from '@lib/axios';

type ArtisData = {
  id: string;
  nama: string;
};

type EventData = {
  id: string;
  nama_event: string;
  waktu_tampil: string;
  harga: string;
  tanggal: string;
  path_image: string;
  guest_star: string[];
};

export default function Daftar() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    const id_user = uuidv4();
    data = {
      ...data,
      id: id_user,
      path_image: '/images/event/event-1.png',
    };
    toast.promise(api.post('/tambah-gs', data), {
      loading: 'Loading',
      success: 'Berhasil Menambahkan Artis',
      error: (err) => err.response.data.message,
    });
  };
  const { data: artisData } = useQuery<ApiReturn<ArtisData[]>, Error>(
    ['/list-artis'],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );
  const { data: eventData } = useQuery<ApiReturn<EventData[]>, Error>(
    ['/list-event'],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );
  console.log(artisData);
  return (
    <Layout>
      <main>
        <section className='h-[50vh] bg-[url(/images/banner/banner.png)] bg-cover bg-no-repeat relative flex items-center justify-center'>
          <h2 className='text-white text-7xl'>Tambah Artis Event</h2>
        </section>
        <section>
          <div className='layout'>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3'>
                  <SelectInput
                    name='artis_id'
                    label='Nama Artis'
                    id='artis_id'
                    className='border border-violet-500'
                  >
                    {artisData?.data.map((event, index) => (
                      <option value={event.id} key={index}>
                        {event.nama}
                      </option>
                    ))}
                  </SelectInput>
                  <SelectInput
                    name='event_id'
                    label='Event'
                    id='event_id'
                    className='border border-violet-500'
                  >
                    {eventData?.data.map((event, index) => (
                      <option value={event.id} key={index}>
                        {event.nama_event}
                      </option>
                    ))}
                  </SelectInput>
                  <Input
                    name='Waktu Tampil'
                    id='waktu_tampil'
                    type='time'
                    label='Waktu Tampil'
                    className='border border-violet-500'
                  ></Input>
                </div>

                <div className='my-10 flex justify-center'>
                  <button
                    className='mt-5 px-4 py-2 bg-blue-300 rounded-md'
                    type='submit'
                  >
                    Daftar
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </Layout>
  );
}
