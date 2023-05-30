import React, {FormEvent, useEffect, useState} from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';


import getInviteInfo from '@/api/get-invite-info';
import InviteInfo from '@/data/responses/invite-info';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import acceptInvite from '@/api/accept-invite';
import ChatRoomLayout from '@/layouts/ChatRoomLayout';



export default function ChatInvite() {
  const nextRouter = useRouter();
  const query = nextRouter.query;
  
  const [inviteInfo, setInviteInfo] = useState<InviteInfo>();
  const [username, setUsername] = useState<string>("");

  
  const inviteId = query.inviteId as string;

  useEffect(()=> {
    const asyncFunc = async() => {
      const inviteInfoResponse = await getInviteInfo(inviteId);
      setInviteInfo(inviteInfoResponse);
    };
    if(inviteId) {
      asyncFunc();
    }
    return (() => {
      setInviteInfo(undefined);
    });
  }, [inviteId]);

  const onJoinSubmit = async(event: FormEvent) => {
    event.preventDefault();
    try {
      const roomId = await acceptInvite({inviteId, username: username});
      nextRouter.push(`/chatroom/${roomId}`);
    } catch {
      alert("There was an error.");
    }

  };

  return (
    <>
      <Head>
        <title>Join {inviteInfo?.chatRoomName}</title>
      </Head>
      <ChatRoomLayout/>
      <Modal show={!!inviteInfo}>
        <Form onSubmit={onJoinSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>
                Please enter your desired display name
              </Form.Label>
              <Form.Control value={username} onChange={(e)=>{setUsername(e.target.value);}}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
              
            <Button type="submit" variant='primary'>
              Join {inviteInfo?.chatRoomName}
            </Button>
          </Modal.Footer>
        
        </Form>
      </Modal>
      
    </>
  );

    
}