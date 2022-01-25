import React from "react";

function Detail({ selected, closeDetail }) {
return (
	<section className="detail">
	<div className="content">
		<h2>{selected.Title}</h2>

		<div className="about">
			<img src={selected.Poster} alt="" />
			<div className="list">	
				<p><strong>Plot Summary: </strong> {selected.Plot}</p>
				<p><strong>Release Year: </strong> {selected.Year}</p>
				<p><strong>Rating: </strong> {selected.imdbRating}</p>
				<p><strong>Runtime: </strong> {selected.Runtime}</p>
				<p><strong>Languages: </strong> {selected.Language}</p>
				<p><strong>Genre: </strong> {selected.Genre}</p>
				<p><strong>Writer: </strong> {selected.Writer}</p>
				<p><strong>Actors: </strong> {selected.Actors}</p>
			</div>
		</div>
		
		<button className="close" onClick={closeDetail}>
		Close
		</button>
	</div>
	</section>
);
}

export default Detail;
