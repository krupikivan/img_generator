import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './app/features/counterSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
  },
})

export const useAppDispatch:()=> typeof store.dispatch=useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;