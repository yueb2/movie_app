//movie render
import React from "react";
import PropTypes from "prop-types";

//state가 필요 없기 때문에, class component가 될 필요가 없다.
//따라서 function component로 작성
function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
