import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const TitleLogin = styled.h2`
  font-size: 20px;
  margin: 0px;
`;

export const ContainerTitleLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Logout = styled.button`
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  cursor: pointer;
  margin: 0px;
  padding: 0px;

  &.loading {
    background-color: orange;
  }

  &.logged {
    background-color: greenyellow;
  }
`;
