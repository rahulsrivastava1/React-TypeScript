import { useEffect, useRef } from "react";

const DomRef = () => {
  // if we put ! after null value, it will allow us to check any property without using optional chaining
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
};

export default DomRef;
