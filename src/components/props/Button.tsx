import React from "react";

type ButtonProps = {
  handleClick: () => void;
  handleClickWithEventsAndId: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.handleClick}>Click Me</button>
      <button onClick={(event) => props.handleClickWithEventsAndId(event, 1)}>
        Click Me with events and Id
      </button>
    </>
  );
};

export default Button;
