import React from 'react';
import { useSelector } from 'react-redux';
import { PhotoItem } from '../PhotoItem';
import { ButtonMorePhotos } from '../ButtonMorePhotos';

export function PhotoList() {
  const { list } = useSelector((state) => state.getPhotos);

  return (
    <div style={{ width: '300px' }}>
      <div>
        {list.map((photo) => (
          <PhotoItem key={`${photo.id}-${photo.title}`} data={photo} />
        ))}
      </div>
      <ButtonMorePhotos />
    </div>
  );
}
