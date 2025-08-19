import SearchPage from "../../components/SearchPage";
import { useState, useEffect } from "react";
import { URL_API, API_KEY } from "../../configApiKey.js";
import { Input } from "antd";
import Paginador from "../../components/Paginador";

import "./search.sass";

const Search = () => {
	const [inputUsuario, setImputUsuario] = useState("");
	const [url, setUrl] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`${URL_API}/search/movie?api_key=${API_KEY}&query=${inputUsuario}&language=en-ES&page=${page}`
			);
			const movies = await response.json();
			setUrl(movies);
		})();
	}, [inputUsuario, page]);

	const onChangeInput = (e) => setImputUsuario(e.target.value);

	const onChange = (e) => setPage(e);

	return (
		<>
			<div className="search-page">
				<h1>Buscador</h1>
				<Input
					placeholder="Escribe el nombre de la película que quieras buscar"
					onChange={onChangeInput}
				/>
				<div className="box-results">
					<div className="card-new-movie">
						<SearchPage url={url} />
					</div>
					<Paginador
						currentPage={url.page}
						onChange={onChange}
						total={url.total_results}
						pageSize={20}
					/>
				</div>
			</div>
		</>
	);
};
export default Search;
