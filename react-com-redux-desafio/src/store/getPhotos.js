import { createAsyncSlice } from './createAsyncSlice';

const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    list: [],
    page: 0,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.page++;
      if (action.payload.length === 0) state.infinite = false;
    },
    removePhotos(state) {
      state.list = [];
      state.page = 0;
      state.infinite = true;
      state.data = null;
    },
  },
  fetchConfig: (page) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});

const { addPhotos, removePhotos } = photos.actions;

export const requestPhotos = photos.asyncAction;
export const removePhotosList = removePhotos;

export const fetchPhotos =
  (page = 1) =>
  async (dispatch) => {
    const { payload } = await dispatch(requestPhotos(page));
    dispatch(addPhotos(payload));
  };

const getPhotos = photos.reducer;
export default getPhotos;
