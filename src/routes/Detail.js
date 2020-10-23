import { render } from "@testing-library/react";
import React from "react";

//클릭없이 url로 이동시 home으로 redirect
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  //실행 순서 render -> componentDidMount
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
