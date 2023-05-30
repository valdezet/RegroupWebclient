import React, {FormEvent, useState} from 'react';
import Head from 'next/head';



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import styles from '@/styles/Index.module.css';
import { ModalHeader } from 'react-bootstrap';
import createChatRoom from '@/api/create-chat-room';
import { useRouter } from 'next/router';


export default function Home() {
  const nextRouter = useRouter();
  const [formModalOpen, setFormModalOpen] = useState<boolean>(false);
  const [newChatRoomName, setNewChatRoomName] = useState<string>("");
  const newChatHandler = async (event: FormEvent) => { 
    event.preventDefault();
    const responseData = await createChatRoom(newChatRoomName);
    nextRouter.push(`/chat-invite/${responseData.inviteId}`);
  };

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
            <Button 
              variant='primary' 
              size='lg' 
              onClick={()=>{setFormModalOpen(true);}}>
              New Chat
            </Button>
          </section>
        </Container>
      </main>

      <Modal show={formModalOpen} onHide={()=>{setFormModalOpen(false);}}>
        <Form onSubmit={newChatHandler}>
          <ModalHeader closeButton>
            <Modal.Title>New Chat Room</Modal.Title>
          </ModalHeader>

          <Modal.Body>
            <Form.Group className='mb-3'>
              <Form.Label>
                Give your chat room a name!
              </Form.Label>
              
              <Form.Control name="Name" value={newChatRoomName} onChange={(e)=>{setNewChatRoomName(e.target.value);}}/>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button type="submit">Create Room</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
