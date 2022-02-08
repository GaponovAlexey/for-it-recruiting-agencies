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
  curentPage: Number
  perPage: Number
  totalPage: Number
}

const initialState: CounterState = {
  photos: [],
  status: '',
  curentPage: 1,
  perPage: 10,
  totalPage: 1,
}

const photosSlice = createSlice({
  name: 'photos/Slice',
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
    [fetchUserPhotos.fulfilled.type]: (state, { payload }) => {
      state.status = 'resolved'
      state.photos += payload
    },
    [fetchUserPhotos.rejected.type]: (state) => {
      state.status = 'rejected'
    },
  },
})

export const {} = photosSlice.actions

export default photosSlice.reducer
