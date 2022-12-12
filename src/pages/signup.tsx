import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Input from '@components/forms/Input';
import PasswordInput from '@components/forms/PasswordInput';
import SEO from '@components/Seo';

import api from '@lib/axios';

type SignupForm = {
  nama: string;
  email: string;
  password: string;
  konfirmasi_password: string;
};

export default function SignupPage() {
  const metods = useForm<SignupForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = metods;

  const onSubmit = (data: SignupForm) => {
    toast.promise(api.post('/register', data), {
      loading: 'Loading',
      success: 'Berhasil mendaftar',
      error: (err) => err.response.data.message,
    });
  };

  return (
    <>
      <SEO title='Signup' />

      <main className='min-h-screen'>
        <section
          id='signup'
          className='bg-[url(/images/auth/signup.png)] flex items-center h-screen bg-cover'
        >
          <div className='layout'>
            <div className='white-05 max-w-md p-5 rounded-xl'>
              <p className='text-primary text-2xl font-bold'>Ayo Daftar!</p>
              <FormProvider {...metods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    label='Nama Depan'
                    id='nama_depan'
                    validation={{ required: true }}
                  />
                  <Input
                    label='Nama Belakang'
                    id='nama_belakang'
                    validation={{ required: true }}
                  />
                  <Input
                    label='No Telpon'
                    id='no_telp'
                    validation={{ required: true }}
                  />
                  <Input
                    label='Email'
                    id='email'
                    type='email'
                    validation={{ required: true }}
                  />
                  <PasswordInput
                    label='Password'
                    id='password'
                    validation={{
                      required: true,
                    }}
                  />
                  <PasswordInput
                    label='Konfimasi Password'
                    id='konfirmasi_password'
                    validation={{ required: true }}
                  />
                  <div className='text-white flex items-center justify-center mt-5'>
                    <button className='bg-primary px-4 py-2 rounded-md'>
                      Sign Up
                    </button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
