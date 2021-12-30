import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../store/getPhotos';
import { Loading } from '../Loading';
import { ButtonMore } from './styles';

export function ButtonMorePhotos() {
  const dispatch = useDispatch();
  const { page, infinite, loading } = useSelector((state) => state.getPhotos);

  function getMorePhotos() {
    dispatch(fetchPhotos(page + 1));
  }

  if (loading) return <Loading />;
  if (!infinite) return null;
  else
    return (
      <ButtonMore onClick={() => getMorePhotos()}>
        <p style={{ fontSize: '18px' }}>+</p>
      </ButtonMore>
    );
}
