import { getUserId, newUserId} from '@/services/user-id-service';
import '@/styles/scss/bootstrap-custom.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading,setLoading] = useState<boolean>(true);
  const [successful, setSuccessful] = useState<boolean>(false);

  useEffect( () => {
    const func = async () => {
      if(getUserId() === null) {
        setSuccessful(await newUserId());
      } else setSuccessful(true);
      setLoading(false); 
    };
    func();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <p>Loading . . .</p>
      ) : (
        successful  
          ? <Component {...pageProps}/> 
          : <p>There was an error loading the page. Please try again</p>
      )}
    </>
  );
}
