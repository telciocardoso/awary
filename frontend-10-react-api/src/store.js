import { configureStore } from '@reduxjs/toolkit'
import addItemReducer from './showListReducer'

export const store = configureStore({
  reducer: {
    showListReducer: showListReducer,
  },
})