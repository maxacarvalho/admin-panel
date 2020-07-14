import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    authenticated: false,
    role: null,
    permissions: [],
  },
  reducers: {
    authenticate: state => {
      state.authenticated = true;
    },
    forget: state => {
      state.authenticated = false;
    },
  },
});

export const { authenticate, forget } = accountSlice.actions;

export default accountSlice.reducer;
