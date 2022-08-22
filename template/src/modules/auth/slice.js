import {REHYDRATE} from 'redux-persist';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isInitial: false,
  value: 0,
  dogs: 123,
  cats: 456,
  user: {
    nameSurname: 'Turgut Kurt',
    email: 'kurt.turgutt@gmail.com',
    phoneNumber: '5366336175',
  },
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    setInitial: state => {
      state.isInitial = true;
    },
    changeLoading: state => {
      state.loading = !state.loading;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeDogs: state => {
      state.dogs += 1;
    },
    changeCats: state => {
      state.cats += 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(REHYDRATE, (state, action) => {
      if (action.payload && action.payload.auth) {
        // Restore only user and isLogin state
        const {auth} = action.payload;
        return {
          ...initialState,
          dogs: auth.dogs,
          isInitial: auth.isInitial,
        };
      } else {
        return state;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  changeDogs,
  changeCats,
  changeLoading,
  setInitial,
} = slice.actions;

export default slice.reducer;