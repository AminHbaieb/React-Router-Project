import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieCard.css";
function MovieCard({ movieData }) {
    // console.log(movieData);
    return (
        <div>
            {/* <img src={el.posterUrl} alt="movie Poster" />
            <img src={props.MoviesData.posterUrl} alt="movie"></img> */}
            <Link to={`/movie/${movieData.title}`}>
                <Card style={{ width: "25rem" }}>
                    <Card.Img variant="top" src={movieData.posterUrl} />
                    <Card.Body>
                        <Card.Title>
                            <h3>{movieData.title}</h3>
                        </Card.Title>
                        <Card.Text>
                            <h5>{movieData.description}</h5>
                        </Card.Text>
                        <div className="CardBar">
                            <Button variant="primary">Watch now</Button>
                            <p>{"⭐".repeat(movieData.movieRate)}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export default MovieCard;
