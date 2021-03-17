import React, { FunctionComponentElement, useCallback, useState } from 'react';

import { Container } from './styles';

export interface SettingsModalProps {
  isOpen: Boolean;
  setTimerOptions: Function;
  timerOptions: Array<{ name: string; minutes: number }>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  setTimerOptions,
  timerOptions,
}) => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const handleSaveSettings = useCallback(() => {
    // setTimerOptions([]);
    console.log(setTimerOptions);
  }, [setTimerOptions]);

  return (
    <Container isOpen={isOpen}>
      <p>Timer Setting</p>
      {timerOptions.map(option => (
        <label>ASDJASKD{option.name}</label>
      ))}

      <label>
        Pomodoro
        <input type="number" value={pomodoro} />
      </label>

      <label>
        Short Break
        <input type="number" value={shortBreak} />
      </label>

      <label>
        Long Break
        <input type="number" value={longBreak} />
      </label>

      <button onClick={handleSaveSettings} type="button">
        Salvar
      </button>
    </Container>
  );
};

export default SettingsModal;
