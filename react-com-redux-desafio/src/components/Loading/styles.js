import styled from 'styled-components';

export const Loader = styled.div`
  max-width: 25%;
  height: 2px;
  background-color: #000;
  overflow: hidden;
  margin: 2rem auto;

  &::after {
    content: '';
    display: block;
    background-color: #fff;
    width: 75%;
    height: 2px;
    animation: loadingAnimated 0.5s linear;
  }

  @keyframes loadingAnimated {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(125%);
    }
  }
`;
