import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  photos: []
}

const initialState: CounterState = {
  photos: [],
}

const photosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: {},
})

export const {} = photosSlice.actions

export default photosSlice.reducer
