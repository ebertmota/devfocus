import styled from 'styled-components';
import devIlustration from '../../assets/dev-ilustration.svg';

interface ITimerMenuItem {
  selected?: Boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #202024;
  display: flex;
  justify-content: center;
`;

export const Timer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  max-width: 480px;
  max-height: 360px;
  width: 100%;
  background: rgba(108, 108, 112, 0.3);
  border-radius: 10px;

  span {
    font-size: 120px;
  }

  > button {
    width: 200px;
    margin-top: 25px;
    padding: 15px;
    width: 200px;
    border-radius: 8px;
    font-weight: bold;
  }
`;

export const TimerMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 40px;
`;

export const TimerMenuItem = styled.button<ITimerMenuItem>`
  border: 0;
  box-shadow: 0;
  padding: 8px 15px;
  color: #fff;
  transition: background 0.2s;
  & + button {
    margin: 0 5px;
  }
  font-weight: ${props => (props.selected ? '700' : '500')};
  border-radius: 4px;
  background: ${props => (props.selected ? 'rgba(0, 0, 0, 0.15)' : 'none')};
`;

export const DetailsSection = styled.div`
  width: 100%;
  display: flex;
  min-height: 600px;
  flex-direction: column;
  margin-top: 72px;
  max-width: 1280px;
  padding: 0 40px;
  background-image: url(${devIlustration});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: bottom right;
`;

export const DetailsSectionHeader = styled.div`
  width: 100%;
  max-width: 50%;
  color: #202024;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin: 40px 0 20px 0;
    color: #6a6a71;
  }

  p {
    color: #6a6a71;
    text-align: justify;
    font-size: 16px;
    margin-bottom: 40px;
  }

  > button {
    width: 100%;
    max-width: 200px;
    padding: 15px;
    font-size: 16px;
    border: 0;
    border-radius: 10px;
    background: #05f4b7;
    color: #fff;
    font-weight: 700;

    &:hover {
      background: #06ce9c;
    }
  }
`;
