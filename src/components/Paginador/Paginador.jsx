import { Pagination } from "antd";
const Paginador = (props) => {
	const { currentPage, onChange, total } = props;

	return (
		<div>
			<Pagination
				currentPage={currentPage}
				onChange={onChange}
				total={total}
				pageSize={20}
			/>
		</div>
	);
};

export default Paginador;
