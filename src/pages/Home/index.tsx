import React from 'react';
import Header from '../../components/Header';
import Timer from '../../components/Timer';
import {
  Container,
  Content,
  DetailsSection,
  DetailsSectionHeader,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Timer />
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
          <a
            type="button"
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            target="blank"
          >
            Check it out
          </a>
        </DetailsSectionHeader>
      </DetailsSection>
    </Container>
  );
};

export default Home;
