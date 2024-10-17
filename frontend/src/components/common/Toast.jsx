import React, { useState } from 'react'

const Toast = ({ message, open }) => {
    const [condition, setCondition] = useState(true);

    // setTimeout(() => {
    //     setCondition(false);
    // }, 3000)

    return (
        <>
            {condition && (
                <div className="toast toast-top toast-end z-10">
                    <div className="w-52 px-2 py-1 bg-red-500 text-white rounded">
                        <span>{message}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Toast