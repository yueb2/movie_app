//movie render
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
//state가 필요 없기 때문에, class component가 될 필요가 없다.
//따라서 function component로 작성
//css적용 : <h3 class="movie__title" style={{ backgroundColor: "green" }}> 이런식으로 각각 적용 할 수 도 있으나, css file을 새로 만들어서 모아사용한다.
function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
