import React from 'react';
import { DelButton } from './DelButton'
import { UpdateButton } from './UpdateButton';

export const Task = ({ person, task, isCompleted, element }) => {
    return (
        <li className='d-flex flex-row align-items-center border rounded border-secondary p-2 mt-1'>
            <div className='col'>
                <p className='m-0'>{person}</p>
            </div>
            <div className='vr' />
            <div className='col'>
                <p className='m-0'>{task}</p>
            </div>
            <div className='vr' />
            <div className='col'>
                {
                isCompleted ?
                <input className="form-check-input" type='checkbox' checked /> :
                <input className="form-check-input" type='checkbox' />
                }
            </div>
            <div className='vr' />
            <div className='col'>
                <UpdateButton element={element} />
                <DelButton element={element}/>
            </div>
        </li>
    )
};
