import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title card-text">
            <p className="card-text-heading">
              Title: 
            </p>
            <p>
              {movie.Title}
            </p>
          </p>
          <p className=""></p>
          <p className="card-text">
            <p className="card-text-heading">
              Release Date: 
            </p>
            <p>
              {movie.Released}
            </p>
          </p>
          <p className="card-text">
            <p className="card-text-heading">
              Genre: 
            </p>
            <p>
              {movie.Genre}
            </p>
          </p>
          <p className="card-text">
            <p className="card-text-heading">
              IMDB Rating: 
            </p>
            <p>
              {movie.imdbRating} of 10
            </p>
          </p>
          <p className="card-text">
            <p className="card-text-heading">
              Country: 
            </p>
            <p>
              {movie.Country}
            </p>
          </p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
