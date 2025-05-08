import React from 'react'

export function WithLabel({ children, ...props }) {
    return (
        <>
            <label className="block my-2" htmlFor={props.name}>
                {props.name[0].toUpperCase() + props.name.slice(1)} <span className="text-red-500">*</span>
            </label>
            {children}
        </>
    )
}