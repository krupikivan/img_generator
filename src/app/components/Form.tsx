import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';

import '../App.css';
import { getImage } from '../features/counterAction';
import { Status } from '../utils/constant';
import Spinner from './Spinner';

const Form = () => {
  const [term, setTerm] = useState('');
  const [path, setPath] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const image = useAppSelector((state) => state.counter.image)
  const status = useAppSelector((state) => state.counter.status)

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    setPath(null);
    dispatch(getImage({text: term}));
  }


  useEffect(() => {
    if (image) {
      setPath(image);
    }
  }, [image]);


  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <h1>Image Generator</h1>
        { path && <img className="photo" src={path} alt=""/>}
        { status === Status.Fetching && <Spinner />}
        { status !== Status.Fetching && 
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="Enter a Prompt"
            className="input"
          />
        }
        { status !== Status.Fetching && <button type="submit" className="btn">Get Image</button>}
      </form>
    </div>
  );
};

export default Form;