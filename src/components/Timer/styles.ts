import styled from 'styled-components';

interface ITimerMenuItem {
  selected?: Boolean;
}

export const Container = styled.div`
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
