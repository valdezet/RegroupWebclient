import Head from 'next/head';
import Link from 'next/link';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import styles from '@/styles/Index.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Regroup</title>
      
      </Head>
      <main>
        <Container>
          <div className={styles.spacer}>
            {/* spacer */}
          </div>
          <section className='text-center'>
            <h1>Regroup</h1>

            <p>enjoy anonymous chat groups!</p>
            
            <Link href="chatroom">
              <Button variant='primary' size='lg'>
                New Chat
              </Button>
            </Link>
          </section>
        </Container>
      </main>
    </>
  );
}
