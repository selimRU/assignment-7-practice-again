import React from 'react';
import { FaMinus } from 'react-icons/fa';
const Selection = ({ selection, idx, handleDelete }) => {
    const { title, id } = selection;

    return (
        <div className=' py-2 flex items-center justify-between '>
            <p className='py-1 px-2 text-sm rounded-sm '>{idx}. {title}</p>
            <button onClick={() => handleDelete(id)} className=' bg-blue-500 px-3 py-1 rounded-md'><FaMinus /></button>
        </div>
    );
};

export default Selection;