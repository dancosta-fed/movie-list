import React from "react";

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <div>
            {props.movies.map((movie, index) => (
                <div className=" image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt='movie poster'></img>
                    <div onClick={() => props.handleFavoritesClick(movie)} className="overlay d-flex align-items-center justify-content">
                        <FavoriteComponent />
                    </div>
                </div>
            ))}

        </div>
    );
};

export default MovieList;