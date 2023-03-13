import { configureStore, createSlice } from '@reduxjs/toolkit';
import { legacy_createStore as createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount
    }
  }
  if (action.type === 'incrementBy5') {
    return {
      counter: state.counter + 5
    }
  }
  if (action.type === 'decrementBy5') {
    return {
      counter: state.counter - 5
    }
  }
  return state;
}

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

const store = configureStore({
  reducer: { auth: authSlice.reducer }
})

export const authActions = authSlice.actions;

export default store;