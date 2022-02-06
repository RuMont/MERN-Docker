import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { DelContext } from '../views/Home';

export const DelButton = ({element}) => {
    const [, setDel] = useContext(DelContext);
    return (
        <button onClick={() => setDel({element: element, display: 'block'})} title="Delete task" className='btn btn-sm btn-danger'>
            <FontAwesomeIcon icon={faBan} />
        </button>
    )
};
