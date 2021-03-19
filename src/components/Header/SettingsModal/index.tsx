import React, { useCallback, useState } from 'react';
import { Switch } from 'react-router-dom';
import { OperationCanceledException } from 'typescript';

import { Container } from './styles';

export interface SettingsModalProps {
  isOpen: Boolean;
  setTimerOptions: Function;
  timerOptions: Array<{ name: string; minutes: number }>;
}

interface SettingsItemProps {
  name: string;
  minutes: number;
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
    const newOptions = [
      {
        name: 'Pomodoro',
        minutes: pomodoro,
      },
      {
        name: 'Short Break',
        minutes: shortBreak,
      },
      {
        name: 'Long Break',
        minutes: longBreak,
      },
    ];
    // setTimerOptions(newOptions);
    // eslint-disable-next-line
    console.log(setTimerOptions);
  }, [setTimerOptions, pomodoro, shortBreak, longBreak]);

  return (
    <Container isOpen={isOpen}>
      <p>Timer Setting</p>

      <label>
        Pomodoro
        <input
          type="number"
          value={pomodoro}
          onChange={e => setPomodoro(Number(e.target.value))}
        />
      </label>

      <label>
        Short Break
        <input
          type="number"
          value={shortBreak}
          onChange={e => setShortBreak(Number(e.target.value))}
        />
      </label>

      <label>
        Long Break
        <input
          type="number"
          value={longBreak}
          onChange={e => setLongBreak(Number(e.target.value))}
        />
      </label>

      <button onClick={handleSaveSettings} type="button">
        Salvar
      </button>
    </Container>
  );
};

export default SettingsModal;
