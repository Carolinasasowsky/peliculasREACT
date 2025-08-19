import { Button, Card } from "antd";
import { Link } from "react-router-dom";

import "./SearchPage.sass";

const { Meta } = Card;

const SearchPage = (props) => {
	const { url } = props;
	const { results } = url;

	if (!results) {
		return (
			<div className="logo-y-texto">
				<div>
					<div className="logo"></div>
				</div>
				<div>
					<h2>Escribe el nombre de una película</h2>
				</div>
			</div>
		);
	}

	return (
		<div className="search-page-results">
			{results.map((movie) => (
				<Prueba movie={movie} key={movie.id} />
			))}
		</div>
	);
};

const Prueba = (props) => {
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

export default SearchPage;
