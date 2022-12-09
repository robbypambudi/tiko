import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import SEO from '@components/Seo';

type SearchForm = {
  search: string;
};

const events = [
  {
    id: 1,
    title: 'The Greatest Showman',
    date: '2021-10-10',
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

  const onSubmit = (data: SearchForm) => {
    console.log(data);
  };

  return (
    <>
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
            <div className='mt-20'>
              <h2 className='font-secondary font-bold text-5xl'>
                Populer saat ini
              </h2>
              <p className='mt-6'>Ayo cari dan tonton artis favoritmu!!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
