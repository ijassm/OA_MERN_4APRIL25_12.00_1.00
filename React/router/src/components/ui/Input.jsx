import clsx from 'clsx'
import React from 'react'

export const Input = ({ ...props }) => {

    // console.log(props, "props");

    const baseStyle = "border-black border-2 p-2 w-full focus:outline-orange-400"
    return (
        <>
            {/* <label className="block my-2" htmlFor={props.name}>
                {props.name[0].toUpperCase() + props.name.slice(1)} <span className="text-red-500">*</span>
            </label> */}
            <input
                className={clsx(baseStyle, {
                    "border-red-500": props.errors[props.name],
                }, props.className)}
                {...props}
            />
            {props.errors[props.name] && <p className="text-red-500 mt-1 text-sm">{props.errors[props.name].message}</p>}
        </>
    )
}
