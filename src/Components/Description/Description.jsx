import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const Description = ({ match, movies }) => {
    console.log(match);
    let movie = movies.find((el) => el.title === match.params.id);
    return (
        <div
            className="description"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h3
                style={{
                    textAlign: "center",
                }}
            >
                Description: {movie.description}
            </h3>
            <iframe
                width="1173"
                height="660"
                src={movie.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};
export default Description;
