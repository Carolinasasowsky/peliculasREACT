import { useContext } from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import FavoritesContext from "../../components/Context/FavoritesContext";
import "../../components/MoviesCards/MoviesCards.sass";

const { Meta } = Card;

const Favorites = () => {
	const { favorites, toggleFavorite } = useContext(FavoritesContext);

	if (!favorites || favorites.length === 0) {
		return (
			<h2 style={{ textAlign: "center", marginTop: "40px" }}>
				No tienes películas en favoritos ❤️
			</h2>
		);
	}

	return (
		<div
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			{favorites.map((movie) => {
				const { poster_path, id, title } = movie;
				const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
				const isFavorite = favorites.some((f) => f.id === id);

				return (
					<Card
						key={id}
						style={{ width: 240, margin: 10, position: "relative" }}
						cover={<img src={posterPath} alt={title} />}
					>
						{/* Corazón funcional con React Icons */}
						<button
							className="favorite-btn"
							onClick={() => toggleFavorite(movie)}
							aria-label="Agregar a favoritos"
						>
							{isFavorite ? (
								<AiFillHeart color="red" size={24} />
							) : (
								<AiOutlineHeart color="white" size={24} />
							)}
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
			})}
		</div>
	);
};

export default Favorites;
