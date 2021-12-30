import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
  background-color: #eee;
  border-radius: 5px;

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

export const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const Name = styled.h2`
  font-size: 16px;
  margin-left: 10px;
`;

export const LeftInfo = styled.div`
  display: flex;
`;

export const RightInfo = styled.p`
  font-size: 14px;
  margin-right: 10px;
  color: #bbb;
  font-family: monospace;
`;
