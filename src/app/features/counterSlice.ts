import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getImage } from './counterAction'
import { Status } from '../utils/constant'

// Define a type for the slice state
interface CounterState {
  value: number,
  status: Status,
  blob: Blob | null,
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  status: Status.Idle,
  blob: null,
}


export const CounterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImage.pending, (state, action) => {
      console.log('Fetching getImage.....')
      state.status = Status.Fetching
    })
    builder.addCase(getImage.fulfilled, (state, action) => {
      console.log('Fetched getImage.....', action.payload)
      state.status = Status.Fetch
      state.blob = action.payload
    })
    builder.addCase(getImage.rejected, (state, action) => {
      console.log('Failed getImage.....')
      state.status = Status.FetchError
    })
  }
})

export const { increment, decrement, incrementByAmount } = CounterSlice.actions
export default CounterSlice.reducer