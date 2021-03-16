import styled from 'styled-components';

import { SettingsModalProps } from './index';

export const Container = styled.div<SettingsModalProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 70px;
  right: 30px;
  background: #fff;
  color: #000;
  padding: 25px;
  transition: all 0.2s;
  border-radius: 8px;

  p {
    font-size: 16px;
    font-weight: bold;
  }

  label {
    margin: 20px 0;
    display: flex;
    flex-direction: column;

    input {
      background: #efefef;
      padding: 5px;
      border: 0;
      border-radius: 5px;
      margin-top: 5px;
    }
  }

  button {
    width: 100%;
    padding: 5px 15px;
    border: 0;
    background: #36363b;
    color: #fff;
    border-radius: 5px;
  }
`;
