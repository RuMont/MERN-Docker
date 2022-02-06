import React from 'react';

export const TaskHeader = () => {
    return (
        <li className='d-flex flex-row align-items-center border border-2 rounded border-light p-2 mb-2'>
            <div className='col'>
                <p className='m-0 fw-bold'>Employee</p>
            </div>
            <div className='vr opacity-100' />
            <div className='col'>
                <p className='m-0 fw-bold'>Task</p>
            </div>
            <div className='vr opacity-100' />
            <div className='col mt-1'>
                <p className='m-0 fw-bold'>Is it completed?</p>
            </div>
            <div className='vr opacity-100' />
            <div className='col'>
                <p className='m-0 fw-bold'>Options</p>
            </div>
        </li>
    )
};
