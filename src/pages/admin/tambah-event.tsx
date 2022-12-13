import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Layout from '@layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { ApiReturn } from '@typ/api';
import { v4 as uuidv4 } from 'uuid';

import Input from '@components/forms/Input';
import SelectInput from '@components/forms/SelectInput';
import TextArea from '@components/forms/TextArea';

import { mockQuery } from '@lib/apiMock';
import api from '@lib/axios';

type UserData = {
  user_id: string;
  nama_depan: string;
  nama_belakang: string;
  email: string;
  no_telp: string;
  role: string;
  name: string;
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
    toast.promise(api.post('/tambah-event', data), {
      loading: 'Loading',
      success: 'Berhasil Menambahkan data',
      error: (err) => err.response.data.message,
    });
  };
  const { data: eventData } = useQuery<ApiReturn<UserData[]>, Error>(
    ['/user'],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );
  return (
    <Layout>
      <main>
        <section className='h-[50vh] bg-[url(/images/banner/banner.png)] bg-cover bg-no-repeat relative flex items-center justify-center'>
          <h2 className='text-white text-7xl'>Tambah Event</h2>
        </section>
        <section>
          <div className='layout'>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3'>
                  <Input
                    name='nama_event'
                    label='Nama Event'
                    id='nama_event'
                    className='border border-violet-500'
                  />
                  <Input
                    name='nama'
                    label='Tempat'
                    id='tempat'
                    className='border border-violet-500'
                  />
                </div>
                <Input
                  name='tanggal'
                  label='Tanggal'
                  id='tanggal'
                  type='text'
                  className='border border-violet-500'
                />
                <TextArea
                  name='deskripsi'
                  label='Deskripsi'
                  id='deskripsi'
                  className='border border-violet-500'
                />

                <Input
                  name='harga'
                  label='Harga'
                  id='harga'
                  type='text'
                  className='border border-violet-500'
                />
                <SelectInput label='User Penyelengara' id='user_id'>
                  {eventData?.data.map((user, index) => (
                    <option value={user.user_id} key={index}>
                      {user.nama_depan}
                    </option>
                  ))}
                </SelectInput>

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
