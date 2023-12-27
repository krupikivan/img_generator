import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { ImageGenerationSlice } from './app/features/imageGenerationSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: ImageGenerationSlice.reducer,
  },
})

export const useAppDispatch:()=> typeof store.dispatch=useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;