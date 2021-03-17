import React, { useCallback, useState } from 'react';
import { MdSettings } from 'react-icons/md';
import SettingsModal from './SettingsModal';

import { Container, Content, SettingsContainer } from './styles';

export interface TimerProps {
  setTimerOptions: Function;
  timerOptions: Array<{ name: string; minutes: number }>;
}

const Header: React.FC<TimerProps> = ({ setTimerOptions, timerOptions }) => {
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

        <SettingsModal
          isOpen={modalIsActive}
          setTimerOptions={setTimerOptions}
          timerOptions={timerOptions}
        />
      </Content>
    </Container>
  );
};

export default Header;
