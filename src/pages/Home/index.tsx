import { clear } from 'console';
import { parse } from 'path';
import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';

import {
  Container,
  Content,
  Timer,
  DetailsSection,
  DetailsSectionHeader,
} from './styles';

const Home: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [started, setIsStarted] = useState(false);
  const [running, setIsRunnig] = useState(false);

  useEffect(() => {
    if (running) {
      // exit early when we reach 0
      if (!seconds) {
        if (!minutes) return;
        const minutesInterval = setInterval(() => {
          setMinutes(minutes - 1);
          setSeconds(59);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(minutesInterval);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }

      // save intervalId to clear the interval when the
      // component re-renders
      const secondsInterval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(secondsInterval);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
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

  return (
    <Container>
      <Header />

      <Content>
        <Timer>
          <span>
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </span>
          <button type="button" onClick={controlsCountdown}>
            {running || (started === false && 'START')}
            {running && 'PAUSE'}
            {running === false && seconds < 60 && seconds > 0 && 'RESUME'}
          </button>
        </Timer>
      </Content>
      <DetailsSection>
        <DetailsSectionHeader>
          <h1>Online Pomodoro Timer to boost your productivity</h1>
          <h2>What is Pomodoro Technique?</h2>
          <p>
            The Pomodoro Technique is created by Francesco Cirillo for a more
            productive way to work and study. The technique uses a timer to
            break down work into intervals, traditionally 25 minutes in length,
            separated by short breaks. Each interval is known as a pomodoro,
            from the Italian word for tomato, after the tomato-shaped kitchen
            timer that Cirillo used as a university student.
          </p>
          <button type="button">Check it out</button>
        </DetailsSectionHeader>
      </DetailsSection>
    </Container>
  );
};

export default Home;
