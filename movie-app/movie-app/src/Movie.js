import React from 'react';
import "./movie.css"

function Movie({id,year,title,summary,poster, genres}){
    return(
        <div className="movies_movie">
                <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <p className="summary">{summary.slice(0,180)}</p>
                <ul className="genres">{genres.map( (genres,index) => (<li className="genres_genre" key={index}>{genres}</li>))}</ul>
            </div>
        </div>
    );
}

export default Movie;