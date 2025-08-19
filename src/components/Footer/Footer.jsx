import { Layout } from "antd";
import "./Footer.sass";

const { Footer: AntFooter } = Layout;

const Footer = () => {
	return (
		<AntFooter className="footer">
			<p>
				🎬 Movie Finder por
				<a href="https://github.com/Carolinasasowsky" target="blank">
					{" "}
					Carolina Sasowsky
				</a>
			</p>
		</AntFooter>
	);
};

export default Footer;
