import React from "react";

class CComponent extends React.Component {
  state = {
    message: "Class component",
    time: new Date().toString(),
  };

  componentDidMount() {
    console.log("I am from did mount!");
    this.interval = setInterval(this.showDate, 1000);
  }

  componentDidUpdate() {
    console.log("I am from update!");
  }

  componentWillUnmount() {
    console.log("I am from unmount");
    clearInterval(this.interval);
  }

  showDate = () => {
    this.setState({ time: new Date().toString() });
  };
  render() {
    return (
      <div>
        {this.state.message}
        <div>{this.state.time}</div>
      </div>
    );
  }
}

export default CComponent;
