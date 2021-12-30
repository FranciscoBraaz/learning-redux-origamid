import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhotos } from '../../store/getPhotos';
import { PhotoList } from '../PhotoList';

export function Photos() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  return <PhotoList />;
}
