import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Input from '@components/forms/Input';
import PasswordInput from '@components/forms/PasswordInput';
import SEO from '@components/Seo';

import api from '@lib/axios';

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const metods = useForm<LoginForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = metods;

  const onSubmit = (data: LoginForm) => {
    toast.promise(
      api.post('/login', data).then((res) => {
        localStorage.setItem('id', res.data.id);
        window.location.href = '/';
      }),
      {
        loading: 'Loading',
        success: 'Berhasil Login',
        error: (err) => err.response.data.message,
      }
    );
  };

  return (
    <>
      <SEO title='Login' />

      <main className='min-h-screen'>
        <section
          id='signup'
          className='bg-[url(/images/auth/login.png)] flex items-center h-screen bg-cover'
        >
          <div className='layout'>
            <div className='white-05 max-w-md p-5 rounded-xl'>
              <p className='text-primary text-2xl font-bold'>Ayo Daftar!</p>
              <FormProvider {...metods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    label='Email'
                    id='email'
                    validation={{ required: true }}
                  />

                  <PasswordInput
                    label='Password'
                    id='password'
                    validation={{
                      required: true,
                    }}
                  />

                  <div className='text-white flex items-center justify-center mt-5'>
                    <button className='bg-primary px-4 py-2 rounded-md'>
                      Login
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
