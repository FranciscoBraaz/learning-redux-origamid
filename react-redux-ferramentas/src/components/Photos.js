import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../store/photos';

export function Photos() {
  const listPhotos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {listPhotos.data &&
          listPhotos.data.map((photo) => <li key={photo.id}>{photo.title}</li>)}
      </ul>
    </div>
  );
}
