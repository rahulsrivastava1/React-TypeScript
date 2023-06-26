type HeadingProps = {
  children: string; // children props
};

const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;
