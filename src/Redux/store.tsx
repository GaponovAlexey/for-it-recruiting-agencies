import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import photosSlice from './reducer'
// ...
const store = configureStore({
  reducer: {
    photo: photosSlice,
  },
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
