import axios from 'axios';
import React, { useContext } from 'react';
import { DelContext } from '../views/Home';
import { Header } from './Header';

async function deleteTask(id) {
    await axios.delete(`http://localhost:8080/delete/${id}`);
}

export const DelModal = () => {
    const [del, setDel] = useContext(DelContext);
    return (
        <div style={{ height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)' }} className={`w-100 position-absolute d-${del.display}`}>
            <div className={`col-3 fixed-top text-center border rounded border-secondary p-2 mx-auto mt-5 bg-dark animate__animated animate__fadeInDown`}>
                <Header type={3}>Are you sure?</Header>
                <hr />
                <p>You are going to delete task: <br /> {del.element && `${del.element.name}: ${del.element.task}`} </p>
                <hr />
                <button onClick={() => setDel({ element: undefined, display: 'none' })} className='btn btn-sm btn-danger me-2 mb-2'>
                    No
                </button>
                <button onClick={() => {deleteTask(del.element._id); setDel({ element: undefined, display: 'none' }) }} className='btn btn-sm btn-success me-2 mb-2'>
                    Yes
                </button>
            </div>
        </div>
    );
};
