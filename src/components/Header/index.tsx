import React, { useCallback, useState } from 'react';
import { MdSettings } from 'react-icons/md';
import Modal from './SettingsModal';

import { Container, Content, SettingsContainer } from './styles';

const Header: React.FC = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const toggleModalActive = useCallback(() => {
    setModalIsActive(state => !state);
  }, []);

  return (
    <Container>
      <Content>
        <h1>
          <span>&lt;</span>
          <strong>focus</strong>
          <span> /&gt;</span>
        </h1>

        <SettingsContainer onClick={toggleModalActive}>
          <MdSettings size={30} color="#FFF" />
        </SettingsContainer>

        <Modal isOpen={modalIsActive} />
      </Content>
    </Container>
  );
};

export default Header;
