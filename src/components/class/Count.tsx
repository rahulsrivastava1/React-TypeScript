import { Component } from "react";

type CountProps = {
  message: string;
};

type CountState = {
  count: number;
};

export class Count extends Component<CountProps, CountState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
