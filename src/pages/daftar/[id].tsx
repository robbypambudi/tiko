import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Layout from '@layout/Layout';
import { useRouter } from 'next/router';

import DatePicker from '@components/forms/DatePicker';
import Input from '@components/forms/Input';

import api from '@lib/axios';

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

  const methods = useForm();
  const { register, handleSubmit } = methods;

  const onSubmit = (data: any) => {
    data = {
      ...data,
      event_id: id,
    };
    toast.promise(api.post('/pesan-tiket', data), {
      loading: 'Loading',
      success: 'Berhasil Login',
      error: (err) => err.response.data.message,
    });
  };
  return (
    <Layout>
      <main>
        <section className='h-[50vh] bg-[url(/images/banner/banner.png)] bg-cover bg-no-repeat relative flex items-center justify-center'>
          <h2 className='text-white text-7xl'>Informasi Personal</h2>
        </section>
        <section>
          <div className='layout'>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3'>
                  <Input
                    name='nama_depan'
                    label='Nama Depan'
                    id='nama_depan'
                    className='border border-violet-500'
                  />
                  <Input
                    name='nama'
                    label='Nama Belakang'
                    id='nama_belakang'
                    className='border border-violet-500'
                  />
                </div>
                <Input
                  name='email'
                  label='Email'
                  id='email'
                  type='email'
                  className='border border-violet-500'
                />
                <Input
                  name='no_telp'
                  label='Nomor Telephone'
                  id='no_telp'
                  type='text'
                  className='border border-violet-500'
                />
                <Input
                  name='nik'
                  label='Nomor Identitas / NIK'
                  id='nik'
                  type='text'
                  className='border border-violet-500'
                />
                <DatePicker
                  name='tanggal_lahir'
                  label='Tanggal Lahir'
                  id='tanggal_lahir'
                  className='border border-violet-500'
                />
                <label>Pilih Jenis Kelamin</label>
                <div className='mt-2 flex space-x-6'>
                  <label>
                    <div>
                      <input
                        type='radio'
                        value='1'
                        {...register('jenis_kelamin')}
                      />
                      <span className='ml-4'>Laki Laki</span>
                    </div>
                  </label>
                  <label>
                    <div>
                      <input
                        type='radio'
                        value='2'
                        {...register('jenis_kelamin', {
                          required: {
                            value: true,
                            message: 'Wajib memilih jenis tryout',
                          },
                        })}
                      />
                      <span className='ml-4'>Perempuan</span>
                    </div>
                  </label>
                </div>
                <label className='mt-5'>
                  Saya setuju menerima notifikasi terkait order berikut melalui
                  nomor WhatsApp saya{' '}
                </label>
                <div className='mt-2 flex space-x-6'>
                  <label>
                    <div>
                      <input type='radio' value='1' {...register('wa_chat')} />
                      <span className='ml-4'>YA</span>
                    </div>
                  </label>
                  <label>
                    <div>
                      <input
                        type='radio'
                        value='0'
                        {...register('wa_chat', {
                          required: {
                            value: true,
                            message: 'Wajib memilih jenis tryout',
                          },
                        })}
                      />
                      <span className='ml-4'>Tidak</span>
                    </div>
                  </label>
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
