import React from "react";

type ContainerProps = {
  styles: React.CSSProperties; // CSS Props
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Content goes here.</div>;
};

export default Container;
