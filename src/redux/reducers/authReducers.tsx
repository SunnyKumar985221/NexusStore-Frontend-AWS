import { fetchAuthSession } from 'aws-amplify/auth';
import { Auth } from '../../interfaces/interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState: Auth = {
  loading: false,
  isToken: false,
  error: null
};

// Async action to fetch the authentication token
export const fetchToken = createAsyncThunk('authentication/fetchToken', async () => {
  try {
    let session = await fetchAuthSession(); // Fetches the current session from Cognito
    if (session.tokens?.accessToken) {
      return true;
    } else {
      throw new Error('No session available'); // Handle no session case
    }
  } catch (error) {
    console.error('Error fetching session:', error);
    throw error; // Throw the error so the rejected state can handle it
  }
});

// Create the auth slice
const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending state
    builder.addCase(fetchToken.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    // Handle fulfilled state when data is successfully fetched
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) state.isToken = true;
      state.error = null;
    });
    // Handle rejected state when an error occurs
    builder.addCase(fetchToken.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch token';
    });
  },
});

export default authSlice.reducer;