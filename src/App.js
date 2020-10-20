import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
//class component
//state => object이고, component의 data를 넣을 공간이 있다. (data는 변한다. 즉, 바꾸고싶은 data를 state에 넣는다.)
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  //axios.get은 그다지 빠르지 않음. -> 기다리는 시간필요.
  //따라서 async, await을 써준다. -> 비동기 함수
  //await이 붙은 것이 끝날때까지 기다렸다가 계속하라..
  getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  //axios 는 처리시간이 그리 빠르지 않다.
  //따라서 javaScript에게 componentDidMount 함수가 끝날때 까지 약간의 시간이 걸릴수 있다고 말하구, 기다려야 한다. -> 이것을 위해 componentDidMount() 앞에 async를 넣거나 getMovie function을 하나 만든다.
  //component가 mount되면 getMovies()를 호출한다.
  componentDidMount() {
    this.getMoives();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
