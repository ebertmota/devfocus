import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 72px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #202024;

  h1 {
    strong {
      margin: 0 8px;
    }
    span {
      font-weight: lighter;
      color: #05f4b7;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const SettingsContainer = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`;
