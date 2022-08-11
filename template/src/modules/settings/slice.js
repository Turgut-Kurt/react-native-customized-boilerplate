import {REHYDRATE} from 'redux-persist';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  lang: 'tr',
};

export const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(REHYDRATE, (state, action) => {
      if (action.payload && action.payload.settings) {
        // Restore only user and isLogin state
        const {settings} = action.payload;
        return {
          ...initialState,
          lang: settings.lang,
        };
      } else {
        return state;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const {changeLang} = slice.actions;

export default slice.reducer;
