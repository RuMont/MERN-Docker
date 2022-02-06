import React, { useContext, useState } from 'react';
import { Header } from './Header';
import 'animate.css'
import { InsertContext } from '../views/Home';
import axios from 'axios';

export const InsertModal = () => {
  const [insert, setInsert] = useContext(InsertContext);
  const [name, setName] = useState('');
  const [task, setTask] = useState('');

  async function addTask(name, task) {
    await axios.post('http://localhost:8080/insert', {
      name: name,
      task: task,
      isCompleted: false
    });
  }

  return (
    <div style={{height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)'}} className={`w-100 position-absolute d-${insert}`}>
      <div className={`col-3 fixed-top text-center border rounded border-secondary p-2 mx-auto mt-5 bg-dark animate__animated animate__fadeInDown`}>
        <Header type={3}>Inserting a new task</Header>
        <hr />
        <div className='d-flex flex-column mx-auto col-8'>
          <input onChange={e => setName(e.target.value)} id="name" className='form-control mb-2' type="text" placeholder="Employee's name" />
          <input onChange={e => setTask(e.target.value)} id="task" className='form-control' type="text" placeholder="TODO Task" />
        </div>
        <hr />
        <div>
          <button onClick={() => setInsert('none')} className='btn btn-sm btn-danger me-2 mb-2'>
            Cancel
          </button>
          <button onClick={() => {addTask(name, task); setInsert('none')}} className='btn btn-sm btn-success me-2 mb-2'>
            Insert
          </button>
        </div>
      </div>
    </div>
  );
};
