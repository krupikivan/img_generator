import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';

import '../App.css';
import { getImage } from '../features/imageGenerationAction';
import { Status } from '../utils/constant';
import { createUrlImage, saveFile } from '../utils/converts';
import Spinner from './Spinner';

const Form = () => {
  const [term, setTerm] = useState<string | null>(null);
  const [path, setPath] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const blob = useAppSelector((state) => state.counter.blob)
  const status = useAppSelector((state) => state.counter.status)

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    if(!term) return;
    event.preventDefault();
    dispatch(getImage({text: term}));
  }

  const save = () => {
    if (blob) {
      saveFile(blob, 'generated.png');
    }
  }


  useEffect(() => {
    if (blob) {
      setPath(createUrlImage(blob));
    }
  }, [blob]);


  return (
    <div className="container">
      <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Image Generator</h1>
      <form onSubmit={submitForm} className='form-generator'>
        <div className='form-generator-column'>
        <textarea
          value={term ?? ''}
          rows={12}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter a Prompt"
          className="input"
          />
        { status !== Status.Fetching && <button type="submit" className="btn">Get Image</button>}
        { status === Status.Fetching && <Spinner />}
        </div>
        <div className='form-generator-column'>
        { path ? <img className="photo" src={path} alt=""/> : <p>No Image to display</p>}
        { path && <button type='button' onClick={save} className="btn">Save Image</button>}
        </div>
      </form>
    </div>
  );
};

export default Form;