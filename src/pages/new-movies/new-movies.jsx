import { useEffect, useState } from "react";
import { URL_API, API_KEY } from "../../configApiKey.js";
import MoviesCards from "../../components/MoviesCards";
import Paginador from "../../components/Paginador";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import "./new-movies.sass";

const NewMovies = () => {
	const [movieList, setMovieList] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=${page}`
			);
			const movies = await response.json();
			setMovieList(movies);
		})();
	}, [page]);

	const onChange = (e) => setPage(e);

	return (
		<>
			<div className="new-movies">
				<h1
					style={{
						textAlign: "center",
						margin: "20px",
					}}
				>
					Ultimos lanzamientos
				</h1>
				<div className="box-results">
					{movieList.results ? (
						<MoviesCards movieList={movieList} />
					) : (
						<Loading />
					)}

					<Paginador
						currentPage={movieList.page}
						onChange={onChange}
						total={movieList.total_results}
						pageSize={20}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default NewMovies;
