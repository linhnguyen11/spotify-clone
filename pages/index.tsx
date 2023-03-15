import Head from 'next/head';
import { Inter } from 'next/font/google';
import SideBar from '@/components/SideBar';
import Center from '@/components/Center';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify Clone with Typescript</title>
        <meta name="description" content="Spotify create by Linh Nguyen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex'>
          <SideBar />
          <Center />
        </div>
      </main>
    </div>
  );
}
