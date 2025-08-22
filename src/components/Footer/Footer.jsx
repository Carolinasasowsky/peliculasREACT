import { Layout } from "antd";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.sass";

const { Footer: AntFooter } = Layout;

const Footer = () => {
	return (
		<AntFooter className="footer">
			<div className="footer__content">
				<p>
					🎬 by{" "}
					<a
						href="https://github.com/Carolinasasowsky"
						target="_blank"
						rel="noopener noreferrer"
					>
						Carolina Sasowsky
					</a>
				</p>

				<div className="footer__social">
					<a
						href="https://github.com/Carolinasasowsky"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/mar%C3%ADacarolinasasowsky/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://walink.co/e1e54d"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaWhatsapp />
					</a>
				</div>
			</div>
		</AntFooter>
	);
};

export default Footer;
