type OscarProps = {
  children: React.ReactNode; // React component props as children
};

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
