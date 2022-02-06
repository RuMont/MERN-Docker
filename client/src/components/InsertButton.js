import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { InsertContext } from '../views/Home';

export const InsertButton = () => {
    const [, setInsert] = useContext(InsertContext);
    return (
        <button onClick={() => setInsert('block')} title="Add new task" className='btn btn-sm btn-success'>
            <FontAwesomeIcon className='fs-6' icon={faPlusCircle} />
        </button>
    )
};
