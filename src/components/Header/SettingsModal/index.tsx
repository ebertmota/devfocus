import React from 'react';

import { Container } from './styles';

export interface SettingsModalProps {
  isOpen: Boolean;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <p>Timer Setting</p>

      <label>
        Pomodoro
        <input type="number" />
      </label>

      <label>
        Short Break
        <input type="number" />
      </label>

      <label>
        Long Break
        <input type="number" />
      </label>

      <button type="button">Salvar</button>
    </Container>
  );
};

export default SettingsModal;
