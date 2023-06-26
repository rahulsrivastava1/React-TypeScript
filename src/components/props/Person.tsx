import { PersonProps } from "./Person.types";

const Person = (props: PersonProps) => {
  return (
    <div>
      Hi! {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
