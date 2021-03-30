import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesList.css";

function MovieList(props) {
    // let result = [];
    // if (props.moviesData.length !== 0) {
    //     result = props.moviesData.filter(
    //         (movie) =>
    //             movie.movieRate >= props.rate &&
    //             movie.title
    //                 .toUpperCase()
    //                 .includes(props.search.toUpperCase()) === true
    //     );
    // }
    // console.log(props.moviesData);
    return (
        <div className="movieslist">
            {/* props.MoviesData[0].title */}
            {/* props.MoviesData.map((el) => (<h1> {el.title}</h1>
            ))*/}
            {/* props.MoviesData.map((el) => (
                    <img src={el.posterUrl} alt="movie Poster" />
                ))*/}
            {props.moviesData
                .filter(
                    (movie) =>
                        movie.title
                            .toUpperCase()
                            .includes(props.search.toUpperCase()) &&
                        movie.movieRate >= props.rate
                )
                .map((el) => (
                    <MovieCard movieData={el} />
                ))}
        </div>
    );
}

export default MovieList;
