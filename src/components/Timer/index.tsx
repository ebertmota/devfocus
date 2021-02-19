import React, { useState, useEffect, useMemo } from 'react';

import { Container, TimerMenu, TimerMenuItem } from './styles';

const options = [
  {
    name: 'Pomodoro',
    minutes: 25,
  },
  {
    name: 'Short Break',
    minutes: 5,
  },
  {
    name: 'Long Break',
    minutes: 15,
  },
];

const Timer: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [started, setIsStarted] = useState(false);
  const [running, setIsRunnig] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    async function handleNotificationRequest() {
      if (!Notification) {
        alert('Esse browser não suporta notificações desktop');
      }
      if (Notification.permission !== 'granted') {
        Notification.requestPermission();
      }
    }
    handleNotificationRequest();
  }, []);

  useEffect(() => {
    if (running) {
      // if seconds get to 0, down minute
      if (!seconds && !minutes) {
        setIsRunnig(false);
        const notification = new Notification('Time to take a break!', {
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
    const option = options.find((_, index) => index === selectedOption);

    if (option) {
      setMinutes(option.minutes);
      setSeconds(0);
      setIsRunnig(false);
    }
  }, [selectedOption]);

  const currentMinutes = useMemo(() => {
    return options[selectedOption].minutes;
  }, [selectedOption]);

  return (
    <Container>
      <TimerMenu>
        {options.map((option, optionIndex) => (
          <TimerMenuItem
            selected={optionIndex === selectedOption}
            onClick={() => setSelectedOption(optionIndex)}
          >
            {option.name}
          </TimerMenuItem>
        ))}
        {/* <TimerMenuItem
        selected={selectedOption === 'Pomodoro'}
        onClick={() => setSelectedOption('Pomodoro')}
      >
        Pomodoro
      </TimerMenuItem>
      <TimerMenuItem
        selected={selectedOption === 'Short Break'}
        onClick={() => setSelectedOption('Short Break')}
      >
        Short Break
      </TimerMenuItem>
      <TimerMenuItem
        selected={selectedOption === 'Long Break'}
        onClick={() => setSelectedOption('Long Break')}
      >
        Long Break
      </TimerMenuItem>{' '} */}
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
