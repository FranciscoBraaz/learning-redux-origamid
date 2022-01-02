import { createAsyncSlice } from '../helper/createAsyncSlice';

const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    cache: 5000,
  },
  fetchConfig: () => ({
    url: 'https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=10&_user=0',
    options: {
      method: 'GET',
      cache: 'no-cache',
    },
  }),
});

export const getOverFiveKg = (state) => {
  return state.photos.data?.filter((photo) => photo.peso >= 5);
};

export const fetchPhotos = photos.asyncAction;
export default photos.reducer;
