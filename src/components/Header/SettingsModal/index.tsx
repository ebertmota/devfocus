import React, { useCallback, useState } from 'react';

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
    const newOptions = timerOptions.map((item: SettingsItemProps) => {
      if (item.name === 'Pomodoro') {
        return {
          name: item.name,
          minutes: pomodoro,
        };
      }

      if (item.name === 'Short Break') {
        return {
          name: item.name,
          minutes: shortBreak,
        };
      }

      if (item.name === 'Long Break') {
        return {
          name: item.name,
          minutes: longBreak,
        };
      }

      return item;
    });

    localStorage.setItem('@devfocus/timerSettings', JSON.stringify(newOptions));

    setTimerOptions(newOptions);
  }, [setTimerOptions, pomodoro, shortBreak, longBreak, timerOptions]);

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
