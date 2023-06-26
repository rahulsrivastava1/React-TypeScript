import { Name } from "./Person.types";

type personListsProps = {
  names: Name[]; // Array of objects props
};

function PersonLists(props: personListsProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}

export default PersonLists;
