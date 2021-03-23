import React, { useState, useEffect, useMemo } from 'react';
import { Container, TimerMenu, TimerMenuItem } from './styles';

interface TimerProps {
  timerOptions: Array<{ name: string; minutes: number }>;
}

const Timer: React.FC<TimerProps> = ({ timerOptions }) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [started, setIsStarted] = useState(false);
  const [running, setIsRunnig] = useState(false);

  const [selectedOption, setSelectedOption] = useState(0);

  async function handleNotificationRequest() {
    if (!Notification) {
      // eslint-disable-next-line
      alert('Esse browser não suporta notificações desktop');
    }
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }

  useEffect(() => {
    if (running) {
      handleNotificationRequest();
      // if seconds get to 0, down minute
      if (!seconds && !minutes) {
        setIsRunnig(false);
        const notification = new Notification('Your time is over', {
          icon:
            'https://i.pinimg.com/originals/00/cc/b6/00ccb6f59d1215f5666ad229af120e9f.png',
          body: 'get some coffe...',
        });

        setMinutes(25);
      }

      if (!seconds) {
        // if minutes get to 0 don't do nothing
        // if (!minutes) return;
        if (!minutes) {
          return;
        }

        const minutesInterval = setInterval(() => {
          setSeconds(59);
          setMinutes(minutes - 1);
        }, 1000);

        return () => clearInterval(minutesInterval);
      }

      const secondsInterval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(secondsInterval);
    }
  }, [seconds, running, minutes]);

  const controlsCountdown = () => {
    if (started === false) {
      setMinutes(state => state - 1);
      setSeconds(59);
      setIsStarted(true);
    }
    setIsRunnig(state => !state);
  };

  useEffect(() => {
    const option = timerOptions.find((_, index) => index === selectedOption);

    if (option) {
      setMinutes(option.minutes);
      setSeconds(0);
      setIsRunnig(false);
    }
  }, [selectedOption, timerOptions]);

  const currentMinutes = useMemo(() => {
    return timerOptions[selectedOption].minutes;
  }, [selectedOption, timerOptions]);

  return (
    <Container>
      <TimerMenu>
        {timerOptions.map((option, optionIndex) => (
          <TimerMenuItem
            key={option.name}
            selected={optionIndex === selectedOption}
            onClick={() => setSelectedOption(optionIndex)}
          >
            {option.name}
          </TimerMenuItem>
        ))}
      </TimerMenu>
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
      <button type="button" onClick={controlsCountdown}>
        {!running && minutes === currentMinutes && 'START'}
        {running && 'PAUSE'}
        {running === false && minutes < currentMinutes && 'RESUME'}
      </button>
    </Container>
  );
};

export default Timer;
