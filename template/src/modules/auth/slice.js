import {REHYDRATE} from 'redux-persist';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  value: 0,
  dogs: 123,
  cats: 456,
  user: [],
  users: {
    nameSurname: 'Turgut Kurt',
    email: 'kurt.turgutt@gmail.com',
    phoneNumber: '5366336175',
    address: 'Kurtuluş Mah. Şehit Pamir Cad.',
    province: 'HATAY',
    district: 'İskenderun',
    iban: 'TR',
    createdDate: '22 Mayıs 2020',
    totalLikes: '455',
    followers: '255',
    following: '23',
    isEmailVerification: false,
    isPhoneVerification: true,
    profileImageUrl:
      'https://www.pinclipart.com/picdir/middle/541-5416602_dummy-profile-image-url-clipart.png',
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUsersSlice: (state, action) => {
      state.users = action.payload;
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
  setUser,
  updateUsersSlice,
  changeLoading,
} = slice.actions;

export default slice.reducer;