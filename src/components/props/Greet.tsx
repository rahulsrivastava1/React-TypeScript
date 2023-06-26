type GreetProps = {
  name: string;
  messageCount?: number; // optional props
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props; // setting default value

  return (
    <div>
      <h3>
        {props.isLoggedIn
          ? `Hi ${props.name}! You have ${messageCount} unread messages`
          : `Welcome Guest!`}
      </h3>
    </div>
  );
}

export default Greet;
