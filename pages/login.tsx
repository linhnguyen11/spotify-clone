import { GetServerSideProps } from 'next';
import React from 'react'
import {ClientSafeProvider, getProviders, signIn} from 'next-auth/react'
import Image from 'next/image';
import spotifyLogo from '../public/Spotify_Logo.png';

interface Props {
  providers: Awaited<ReturnType<typeof getProviders>>
}

function Login({providers} : Props) {
  const {name: providerName, id: providerId} = providers?.spotify as ClientSafeProvider
  return (
    <div className='flex flex-col justify-center items-center bg-black h-screen'>
      <div className="mb-6">
        <Image src={spotifyLogo} width={200} height={200} alt='Logo' />
      </div>
      <button className='mt-4 bg-green-500 text-white p-5 rounded-full' onClick={() => {signIn(providerId, {callbackUrl: '/'})}}>Login with {providerName}</button>
    </div>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const providers = await getProviders()
    return {
        props : {
          providers
        }
    }
  }