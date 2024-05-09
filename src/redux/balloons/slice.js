import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchBallons } from './asyncActions'
import { Status } from './types'

const initialState = {
  items: [],
  status: Status.LOADING,
}

export const balloonsSlice = createSlice({
  name: 'balloons',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBallons.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchBallons.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchBallons.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})

export const { setItems } = balloonsSlice.actions

export default balloonsSlice.reducer
