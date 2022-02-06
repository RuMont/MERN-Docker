import React, { useContext, useEffect, useState } from 'react';
import { Header } from './Header';
import 'animate.css'
import axios from 'axios';
import { UpdateContext } from '../views/Home';

export const UpdateModal = () => {
  const [update, setUpdate] = useContext(UpdateContext);
  const [name, setName] = useState('');
  const [task, setTask] = useState('');

  useEffect(() => {
    if (update.element) {
      setName(update.element.name);
      setTask(update.element.task);
    }
  }, [update.element]);


  async function updateTask(id, name, task) {
    await axios.post('http://localhost:8080/update', {
      _id: id,
      name: name,
      task: task
    });
  }

  return (
    <div style={{ height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)' }} className={`w-100 position-absolute d-${update.display}`}>
      <div className={`col-3 fixed-top text-center border rounded border-secondary p-2 mx-auto mt-5 bg-dark animate__animated animate__fadeInDown`}>
        <Header type={3}>Updating a task</Header>
        <hr />
        <p>Updating {update.element && `${update.element.name}: ${update.element.task}`}</p>
        <div className='d-flex flex-column mx-auto col-8'>
          <input onChange={e => setName(e.target.value)} id="name" value={name} className='form-control mb-2' type="text" placeholder="Employee's name" />
          <input onChange={e => setTask(e.target.value)} id="task" value={task} className='form-control' type="text" placeholder="TODO Task" />
        </div>
        <hr />
        <div>
          <button onClick={() => setUpdate({ element: undefined, display: 'none' })} className='btn btn-sm btn-danger me-2 mb-2'>
            Cancel
          </button>
          <button onClick={() => { updateTask(update.element._id, name, task); setUpdate({ element: undefined, display: 'none' }) }} className='btn btn-sm btn-success me-2 mb-2'>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
