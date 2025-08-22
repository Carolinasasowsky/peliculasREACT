import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../Context/FavoritesContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./MoviesCards.sass";
import noDisponible from "../../assets/no-disponible.jpg"; 


const { Meta } = Card;

const MoviesCards = ({ movieList }) => {
	
	
	const results = movieList?.results || [];

	return (
		<div className="cards-new-movie">
			<div className="card-new-movie">
				{results.map((movie) => (
					<CardNewMovie movie={movie} key={movie.id} />
				))}
			</div>
		</div>
	);
};

const CardNewMovie = ({ movie }) => {
	const { favorites, toggleFavorite } = useContext(FavoritesContext);

	if (!movie) return null;

	const { poster_path, id, title } = movie;
	const posterPath = poster_path
		? `https://image.tmdb.org/t/p/original${poster_path}`
		: noDisponible;
	const isFavorite = favorites.some((f) => f.id === id);

	return (
		<Card
			style={{ width: 240, margin: 10, position: "relative" }}
			cover={<img src={posterPath} alt={title} />}
		>
			{/* Corazón sobre el cover */}
			<button
					className="favorite-btn"
					onClick={() => toggleFavorite({ id, title, poster_path })}
					aria-label="Agregar a favoritos"
			>
					{isFavorite ? <AiFillHeart color="red" size={24} /> : <AiOutlineHeart color="white" size={24} />}
			</button>

			<Meta
				title={title}
				style={{ textAlign: "center" }}
				description={
					<Link to={`/movie/${id}`}>
						<Button className="btn-eye">
							<i className="far fa-eye"></i>
						</Button>
					</Link>
				}
			/>
		</Card>
	);
};

export default MoviesCards;
