import { Button, Card } from "antd";
import { Link } from "react-router-dom";

import "./MoviesCards.sass";

const { Meta } = Card;

const MoviesCards = (props) => {
	const { movieList } = props;
	const { results } = movieList;

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

const CardNewMovie = (props) => {
	const {
		movie: { poster_path, id, title },
	} = props;
	const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;

	return (
		<Card
			style={{ width: 240, margin: 10 }}
			cover={<img src={posterPath} alt="" />}
		>
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
