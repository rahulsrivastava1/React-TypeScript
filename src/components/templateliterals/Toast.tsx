type horizontalPosition = "left" | "center" | "right";
type verticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${horizontalPosition}-${verticalPosition}`, "center-center">
    | "center";
};

const Toast = (props: ToastProps) => {
  return <div>Position is - {props.position}</div>;
};

export default Toast;
