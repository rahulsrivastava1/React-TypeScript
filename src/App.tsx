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
// import MutableRef from "./components/ref/MutableRef";
// import { Count } from "./components/class/Count";
// import Profile from "./components/auth/Profile";
// import Private from "./components/auth/Private";
// import List from "./components/generics/List";
// import RandomNumber from "./components/restriction/RandomNumber";
// import Toast from "./components/templateliterals/Toast";
// import Input from "./components/html/Input";
// import Button from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";
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
      {/* <p>Ref</p>
      <DomRef />
      <MutableRef /> */}
      {/* <p>Class based components</p>
      <Count message="Count value is: " />
      <Private isLoggedIn={true} component={Profile} /> */}
      {/* <p>Generic Props</p>
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <p>Restriction Props</p>
      <RandomNumber value={10} isPositive /> */}
      {/* <p>Template Literal Props and Exclude</p>
      <Toast position="right-bottom" /> */}
      {/* <p>Wrapping HTML elements</p>
      <Input />
      <Button variant="primary">Primary Button</Button> */}
      <p>Polymorphic Component</p>
      <Text size="lg" as="h1">
        Heading
      </Text>
      <Text size="md" as="p">
        Paragraph
      </Text>
      <Text size="sm" color="secondary" as="label" htmlFor="someId">
        Label
      </Text>
    </div>
  );
}

export default App;
