import React from 'react';
import { Container, LeftInfo, Name, Photo, RightInfo } from './styles';

export function PhotoItem({ data }) {
  return (
    <Container className="animeEntry">
      <LeftInfo>
        <Photo src={data.src}></Photo>
        <Name>{data.title}</Name>
      </LeftInfo>
      <RightInfo>{data.acessos}</RightInfo>
    </Container>
  );
}
