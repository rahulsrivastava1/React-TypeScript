type StatusProps = {
  status: "loading" | "success" | "error"; // pre defined value as props
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "Status is loading...";
  } else if (props.status === "success") {
    message = "Status Load Successfully!";
  } else {
    message = "Something went wrong!";
  }

  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

export default Status;
