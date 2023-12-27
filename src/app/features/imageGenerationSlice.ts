import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getImage } from './imageGenerationAction'
import { optionStyle, Status } from '../utils/constant'

// Define a type for the slice state
interface ImageGenerationState {
  status: Status,
  blob: Blob | null,
  style: string | null,
  optionStyle: string[],
}

// Define the initial state using that type
const initialState: ImageGenerationState = {
  status: Status.Idle,
  blob: null,
  style: null,
  optionStyle: optionStyle,
}


export const ImageGenerationSlice = createSlice({
  name: 'imageGeneration',
  initialState,
  reducers: {
    selectStyle: (state, action: PayloadAction<string>) => {
      state.style = action.payload
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

export const { selectStyle } = ImageGenerationSlice.actions
export default ImageGenerationSlice.reducer