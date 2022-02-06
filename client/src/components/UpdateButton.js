import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { UpdateContext } from '../views/Home';

export const UpdateButton = ({element}) => {
    const [, setUpdate] = useContext(UpdateContext);
    return (
        <button onClick={() => setUpdate({element: element, display: 'block'})} title="Edit task" className='btn btn-sm btn-primary me-2'>
            <FontAwesomeIcon icon={faCog} />
        </button>
    )
};
