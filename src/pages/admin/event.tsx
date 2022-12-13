import Layout from '@layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { ApiReturn } from '@typ/api';

import { mockQuery } from '@lib/apiMock';

type UserData = {
  user_id: string;
  nama_depan: string;
  nama_belakang: string;
  email: string;
  no_telp: string;
  role: string;
  name: string;
};

export default function AdminPage() {
  const { data: eventData } = useQuery<ApiReturn<UserData[]>, Error>(
    ['/user'],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );
  if (!eventData) return <div>Loading...</div>;
  return (
    <Layout>
      <div className='layout mt-5'>
        <table className='table-auto w-full'>
          <thead className='border'>
            <tr>
              <th>ID</th>
              <th>Nama Depan</th>
              <th>Nama Belakang</th>
              <th>Email</th>
              <th>No Telpon</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {eventData?.data.map((event, index) => (
              <tr className='border h-10 ' key={index}>
                <td className='px-1'>{event.user_id}</td>
                <td className='px-1'>{event.nama_depan}</td>
                <td className='px-1'>{event.nama_belakang}</td>
                <td className='px-1'>{event.email}</td>
                <td className='px-1'>{event.no_telp}</td>
                <td className='px-1'>{event.name}</td>
                <td className='px-2'>
                  <p className='bg-red-500 rounded-sm px-2 text-white'>Hapus</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
