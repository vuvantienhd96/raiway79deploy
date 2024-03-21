import { createSlice } from '@reduxjs/toolkit';

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    isTheme: true,
  },
  reducers: {
    updateThem: (state) => {
      state.isTheme = !state.isTheme;
    },
  },
});

// export function reducer
export const { updateThem } = ThemeSlice.actions;

// export reducer
export default ThemeSlice.reducer;
