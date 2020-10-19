import React from "react";

//class component
//state => object이고, component의 data를 넣을 공간이 있다. (data는 변한다. 즉, 바꾸고싶은 data를 state에 넣는다.)
class App extends React.Component {
  state = {
    count: 0,
  };

  //  this.setState({ count: this.state.count + 1 }) 대신 current를 사용한다. -> 위와같이 작성시, 어디선가 this.state.count가 update된다면 꼬일수 있다.
  //setState를 호출하는 매순간 react는 새로운 state와 함깨 render function을 호출한다.
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just Update!!");
  }
  componentWillUnmount() {
    console.log("GoodBYe, cruel world");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
