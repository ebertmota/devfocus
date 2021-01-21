import React from 'react';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>
          <span>&lt;</span>
          <strong>focus</strong>
          <span> /&gt;</span>
        </h1>
      </Content>
    </Container>
  );
};

export default Header;
