import { useEffect, useState } from "react";
import FavoritesContext from "./FavoritesContext";

export default function FavoritesProvider({ children }) {
	const [favorites, setFavorites] = useState(() => {
		// Inicializa desde localStorage
		const saved = localStorage.getItem("favorites");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		// Guarda cambios en localStorage cada vez que favorites cambie
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const toggleFavorite = (movie) => {
		setFavorites((prev) =>
			prev.some((f) => f.id === movie.id)
				? prev.filter((f) => f.id !== movie.id)
				: [...prev, movie]
		);
	};

	return (
		<FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
}
