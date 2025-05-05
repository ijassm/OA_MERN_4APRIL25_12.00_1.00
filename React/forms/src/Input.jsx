import clsx from "clsx";
import React from "react";

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx("border-black border-2 p-2", className)}
      {...props}
    />
  );
};
