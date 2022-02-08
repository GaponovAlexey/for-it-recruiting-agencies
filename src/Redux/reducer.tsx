import {
  createSlice,
  Action,
  AnyAction,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit'

interface userIDfetch {
  albumId: Number
  id: Number
  title: string
  url: String
  thumbnailUrl: String
}

const userAPI = 'http://jsonplaceholder.typicode.com/photos'

//  create the thunk
export const fetchUserPhotos = createAsyncThunk(
  'photos/fetch',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(userAPI)
      
      const data = await response.json()
      return data
    } catch {}
  }
)

// reducers
interface RejectedAction extends Action {
  error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

export interface CounterState {
  photos: userIDfetch | any
  status: String
}

const initialState: CounterState = {
  photos: [],
  status: '',
}

const photosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addPhoto: (state, { payload }) => {
      state.photos += payload
    },
  },
  extraReducers: {
    [fetchUserPhotos.pending.type]: (state) => {
      state.status = 'loading'
    },
    [fetchUserPhotos.fulfilled.type]: (state, { payload }): void => {
      state.status = 'resolved'
      state.photos.push(payload)
    },
    [fetchUserPhotos.rejected.type]: (state) => {
      state.status = 'rejected'
    },
  },
})

export const { addPhoto } = photosSlice.actions

export default photosSlice.reducer
