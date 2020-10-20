import React from "react";

//class component
//state => object이고, component의 data를 넣을 공간이 있다. (data는 변한다. 즉, 바꾸고싶은 data를 state에 넣는다.)
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>;
  }
}

export default App;
