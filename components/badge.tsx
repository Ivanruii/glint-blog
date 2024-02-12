import React from 'react';

export const Badge = ({ nombre, color }) => {
    return (
        <span className={`inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-600/10 w-fit`}>
            {nombre}
        </span>
    );
};
