// import Greet from "./components/props/Greet";
// import Person from "./components/props/Person";
// import PersonLists from "./components/props/PersonLists";
// import Status from "./components/props/Status";
// import Heading from "./components/props/Heading";
// import Oscar from "./components/props/Oscar";
// import Button from "./components/props/Button";
// import Input from "./components/props/Input";
// import Container from "./components/props/Container";
// import LoggedIn from "./components/state/LoggedIn";
// import User from "./components/state/User";
// import User2 from "./components/state/User2";
// import Counter from "./components/state/Counter";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import Box from "./components/context/Box";
// import { UserContextProvider } from "./components/context/UserContext";
// import Users from "./components/context/Users";
// import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import "./App.css";

function App() {
  // const personName = {
  //   first: "Rahul",
  //   last: "Srivastava",
  // };

  // const personNames = [
  //   {
  //     first: "Rishav",
  //     last: "Dutta",
  //   },
  //   {
  //     first: "Ayush",
  //     last: "Raj",
  //   },
  //   {
  //     first: "Shivansh",
  //     last: "Jaitly",
  //   },
  // ];

  return (
    <div className="App">
      {/* <p>Props</p>
      <Greet name="Rahul" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonLists names={personNames} />
      <Status status="loading" />
      <Heading>Children Props - 1</Heading>
      <Oscar>
        <Heading>Children Props - 2</Heading>
      </Oscar>
      <Button
        handleClick={() => console.log("Button Click")}
        handleClickWithEventsAndId={(event, id) => console.log(event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
      <hr />
      <p>State</p>
      <LoggedIn />
      <User />
      <User2 />
      <Counter /> */}
      {/* <p>Context</p>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <Users />
      </UserContextProvider> */}
      <p>Ref</p>
      {/* <DomRef /> */}
      <MutableRef />
    </div>
  );
}

export default App;
