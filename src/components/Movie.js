//movie render
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";
//state가 필요 없기 때문에, class component가 될 필요가 없다.
//따라서 function component로 작성
//css적용 : <h3 class="movie__title" style={{ backgroundColor: "green" }}> 이런식으로 각각 적용 할 수 도 있으나, css file을 새로 만들어서 모아사용한다.
//<label for ..> -> html 임. 하지만 javascript에서는 for이 loop이다.
//따라서 jsx에서 <label for ..>은 <label htmlFor ..>로 작성해야 한다.
//map function은 item뿐만아니라 item number(index)를 제공한다.
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="genres">
            {genres.map((genres, index) => (
              <li key={index} className="geners__genre">
                {genres}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Movie;
