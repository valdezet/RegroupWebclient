import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LayoutStyles from "@/styles/ChatRoomLayout.module.css";

type LayoutProps = {
    Left?: React.ReactNode,
    Main?: React.ReactNode,
    Bottom?: React.ReactNode
}

function ChatRoomLayout(props: LayoutProps) {
  const {Left, Main, Bottom} = props;
  return (
    <Container fluid >
      <Row className='min-vh-100'>
        <Col as="aside" xs={4} sm={3} xl={2} className='border h-100'>
          {Left}
        </Col>
        <Col as="main" xs={8} sm={9} xl={10}>
          <div className={`border ${LayoutStyles.main}`} >
            {Main}
          </div>
          <div className={`border ${LayoutStyles.bottom}`}>
            {Bottom}
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default ChatRoomLayout;