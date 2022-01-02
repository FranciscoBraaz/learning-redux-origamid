import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, getOverFiveKg } from '../store/photos';

export function Photos() {
  const listPhotos = useSelector(getOverFiveKg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {listPhotos &&
          listPhotos.map((photo) => (
            <li key={photo.id}>
              {photo.title} | {photo.peso}
            </li>
          ))}
      </ul>
    </div>
  );
}
