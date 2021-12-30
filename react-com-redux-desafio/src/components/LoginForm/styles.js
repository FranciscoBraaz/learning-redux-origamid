import styled from 'styled-components';

export const Container = styled.div`
  &.animeEntry {
    opacity: 0;
    transform: translateX(-10px);
    animation: anime 0.3s forwards;
  }

  @keyframes anime {
    to {
      transform: initial;
      opacity: 1;
    }
  }
`;

export const LabelLogin = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

export const InputLogin = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

export const ButtonSend = styled.button`
  font-size: 16px;
  width: 100px;
  height: 40px;
  color: #fff;
  background: #000;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`;
