import { LoadingOutlined } from "@ant-design/icons";
import "./Loading.sass";

const Loading = () => {
	return (
		<div className="loading">
			<LoadingOutlined style={{ fontSize: 24 }} spin />
			<h5>Cargando...</h5>
		</div>
	);
};

export default Loading;
