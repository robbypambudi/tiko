import * as React from 'react';

import UnstyledLink from '@components/links/UnstyledLink';

const links = [
  { href: '/login', label: 'Login' },
  { href: '/signup', label: 'Daftar' },
  { href: '/tim', label: 'Team' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-slate-900'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='font-bold hover:text-gray-600 !text-white'
        >
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4 text-white'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='hover:text-gray-600 text-white'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
