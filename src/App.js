// App.js

import React from 'react';
import { Container, Row as BsRow, Col } from 'react-bootstrap';  // Rename Row to avoid conflict
import styled from 'styled-components';

const PageLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 30px;
  box-sizing: border-box;
  background-color: white;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const TerminalIcon = styled.img`
  width: 100px;
  height: 50px;
  margin-bottom: 10px;
`;

// Styled component for the Row
const Row = styled(BsRow)`
  padding-top: 5vh;  // Adjust as needed
  padding-bottom: 5vh;  // Adjust as needed
`;

function App() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <PageLink onClick={() => window.location.href = '/practice1'}>
            <TerminalIcon src="/giphy.gif" alt="Terminal Icon" />
            Terminal Practice
          </PageLink>
        </Col>
        <Col xs={6}>
          <PageLink>
            <TerminalIcon src="/path_to_terminal_icon.gif" alt="Terminal Icon" />
            Placeholder 1
          </PageLink>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <PageLink>
            <TerminalIcon src="/path_to_terminal_icon.gif" alt="Terminal Icon" />
            Placeholder 2
          </PageLink>
        </Col>
        <Col xs={6}>
          <PageLink>
            <TerminalIcon src="/path_to_terminal_icon.gif" alt="Terminal Icon" />
            Placeholder 3
          </PageLink>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <PageLink>
            <TerminalIcon src="/path_to_terminal_icon.gif" alt="Terminal Icon" />
            Placeholder 4
          </PageLink>
        </Col>
        {/* Add another Col for Placeholder 5 when ready */}
      </Row>
    </Container>
  );
}

export default App;
