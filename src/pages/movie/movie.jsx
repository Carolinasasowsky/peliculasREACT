// Dependencias
import { useContext } from "react";
import FavoritesContext from "../../components/Context/FavoritesContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import React, { useState } from "react";
import { Row, Col, Button, Modal } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { URL_API, API_KEY } from "../../configApiKey.js";
import Loading from "../../components/Loading";

import "./movie.sass";

const Movie = () => {
	const { id } = useParams();
	const url = `${URL_API}/movie/${id}?api_key=${API_KEY}&language=es-ES`;
	const movieInfo = useFetch(url);

	if (movieInfo.loading || !movieInfo.result) {
		return <Loading />;
	}

	return <RenderMovie movieInfo={movieInfo} />;
};

const RenderMovie = ({ movieInfo }) => {
	const backdrop_path = movieInfo?.result?.backdrop_path;
	const poster_path = movieInfo?.result?.poster_path;

	if (!backdrop_path || !poster_path) return <Loading />;

	const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

	return (
		<div
			className="movie"
			style={{ backgroundImage: `url('${backdropPath}')` }}
		>
			<div className="movie__dark">
				{/* 👇 Aquí agregamos gutter={[0,0] para quitar márgenes de AntD */}
				<Row className="fila" gutter={[0, 0]}>
					<Col span={8} offset={3} className="movie__poster">
						<PosterMovie image={poster_path} movie={movieInfo.result} />
					</Col>
					<Col span={10} className="movie__info">
						<MovieInfo movieInfo={movieInfo} />
					</Col>
				</Row>
			</div>
		</div>
	);
};

const PosterMovie = ({ image, movie }) => {
	const { favorites, toggleFavorite } = useContext(FavoritesContext);
	if (!image || !movie) return null;

	const posterPath = `https://image.tmdb.org/t/p/original${image}`;
	const isFavorite = favorites.some((f) => f.id === movie.id);

	return (
		<div className="movie__poster">
			<div
				className="poster-background"
				style={{ backgroundImage: `url('${posterPath}')` }}
			>
				<button
					className="favorite-btn"
					onClick={() => toggleFavorite(movie)}
					aria-label="Agregar a favoritos"
				>
					{isFavorite ? (
						<AiFillHeart size={24} color="red" />
					) : (
						<AiOutlineHeart size={24} color="white" />
					)}
				</button>
			</div>
		</div>
	);
};







const MovieInfo = ({ movieInfo }) => {
	const movie = movieInfo?.result;
	const [isVisibleModal, setIsVisibleModal] = useState(false);

	// Validar que movie exista antes de usar id
	const movieId = movie?.id;
	const url = movieId
		? `${URL_API}/movie/${movieId}/videos?api_key=${API_KEY}&language=es-ES`
		: null;

	const videoMovie = useFetch(url);

	const openModal = () => setIsVisibleModal(true);
	const closeModal = () => setIsVisibleModal(false);

	if (!movie) return <Loading />;

	const renderVideo = () => {
		const videos = videoMovie?.result?.results;
		if (videos && videos.length > 0) {
			return (
				<>
					<Button className="button" onClick={openModal}>
						<i className="far fa-play-circle" /> Ver Trailer
					</Button>

					<Modal
						open={isVisibleModal} //
						onCancel={closeModal}
						footer={null}
						centered
						width={800}
						destroyOnHidden={true}
					>
						<div
							className="modal-video-container"
							style={{ position: "relative" }}
						>
							{/* Botón de cerrar */}
							<button className="close-trailer-btn" onClick={closeModal}>
								✕
							</button>
							<iframe
								width="100%"
								height="450"
								src={`https://www.youtube.com/embed/${videos[0]?.key}`}
								title="Trailer"
								allowFullScreen
							></iframe>
						</div>
					</Modal>
				</>
			);
		}
		return null;
	};

	const { title, release_date, overview, genres } = movie;

	return (
		<div>
			<div className="info">
				<h1>
					{title}
					<span>
						{release_date
							? moment(release_date, "YYYY-MM-DD").format("YYYY")
							: "N/A"}
					</span>
				</h1>
				{renderVideo()}
			</div>

			<div className="content">
				<h3>General</h3>
				<p>{overview || "No disponible"}</p>
				<h3>Generos</h3>
				<ul>
					{genres?.length > 0 ? (
						genres.map((g) => <li key={g.id}>{g.name}</li>)
					) : (
						<li>No disponible</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Movie;
