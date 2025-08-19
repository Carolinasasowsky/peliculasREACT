// Librerías y funcionalidades
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import NewMovies from "./pages/new-movies";
import Search from "./pages/search";
import Popular from "./pages/popular";

// Componentes
import MenuTop from "./components/MenuTop";

const App = () => {
	const { Header, Content } = Layout;

	return (
		<Layout>
			<BrowserRouter basename="/">
				<Header style={{ zIndex: 1 }}>
					<MenuTop />
				</Header>
				<Content>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/new-movies" element={<NewMovies />} />
						<Route path="/popular" element={<Popular />} />
						<Route path="/search" element={<Search />} />
						<Route path="/movie/:id" element={<Movie />} />
						<Route path="*" element={<Error404 />} />
					</Routes>
				</Content>
			</BrowserRouter>
		</Layout>
	);
};

export default App;
