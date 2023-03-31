import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { decrement, increment } from '../features/counterSlice'

const Counter = (): JSX.Element => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <React.Fragment>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())} 
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    </React.Fragment>
  )
}

export default Counter