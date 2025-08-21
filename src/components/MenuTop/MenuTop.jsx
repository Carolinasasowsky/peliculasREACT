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

	// Definimos los items del menú
	const menuItems = [
		{ key: "1", label: <Link to="/">Home</Link> },
		{ key: "2", label: <Link to="/new-movies">Últimos lanzamientos</Link> },
		{ key: "3", label: <Link to="/popular">Más populares</Link> },
		{ key: "4", label: <Link to="/search">Buscador</Link> },
		{ key: "5", label: <Link to="/favorites">Favoritos</Link> },
	];

	// Para el menú móvil agregamos onClick para cerrar el menú al seleccionar
	const mobileMenuItems = menuItems.map((item) => ({
		...item,
		label: React.cloneElement(item.label, { onClick: toggleMenu }),
	}));

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
				items={menuItems}
			/>

			{/* Menú móvil */}
			<Menu
				theme="dark"
				mode="vertical"
				className={`menu-mobile ${isMobileMenuOpen ? "open" : ""}`}
				items={mobileMenuItems}
			/>
		</div>
	);
};

export default MenuTop;
