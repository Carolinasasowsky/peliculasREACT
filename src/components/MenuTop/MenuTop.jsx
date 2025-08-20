import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "./MenuTop.sass";

const MenuTop = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className="menu-top">
			{/* Logo */}
			<div className="menu-top__logo">
				<div className="logo2"></div>
			</div>

			{/* Botón hamburguesa / cerrar */}
			<div className="menu-top__toggle" onClick={toggleMenu}>
				{isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
			</div>

			{/* Menú de escritorio */}
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={["1"]}
				className="menu-desktop"
				style={{ lineHeight: "68px" }}
			>
				<Menu.Item key="1">
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/new-movies">Últimos lanzamientos</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/popular">Más populares</Link>
				</Menu.Item>
				<Menu.Item key="4">
					<Link to="/search">Buscador</Link>
				</Menu.Item>
				<Menu.Item key="5">
					<Link to="/favorites">Favoritos</Link>
				</Menu.Item>
			</Menu>

			{/* Menú móvil (slide) */}
			<Menu
				theme="dark"
				mode="vertical"
				className={`menu-mobile ${isMobileMenuOpen ? "open" : ""}`}
			>
				<Menu.Item key="1">
					<Link to="/" onClick={toggleMenu}>
						Home
					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/new-movies" onClick={toggleMenu}>
						Últimos lanzamientos
					</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/popular" onClick={toggleMenu}>
						Más populares
					</Link>
				</Menu.Item>
				<Menu.Item key="4">
					<Link to="/search" onClick={toggleMenu}>
						Buscador
					</Link>
				</Menu.Item>
				<Menu.Item key="5">
					<Link to="/favorites" onClick={toggleMenu}>
						Favoritos
					</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default MenuTop;
