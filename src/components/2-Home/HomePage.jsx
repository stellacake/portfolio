import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/styles.css";

export function HomePage() {
	return (
		<div className="homepage">
			<div className="home-content">
				<div className="home-welcome">
					<h1>
						Bonjour, <br />
						je m'appelle Stella.
					</h1>
					<h2>
						Développeuse FullStack <br />
						React/Node.js
					</h2>
					<Link to="https://bit.ly/36JJmyi" className="button">
						Me contacter
					</Link>
				</div>
				<div className="home-sky">
					<div className="shooting-star"></div>
					<div className="shooting-star"></div>
					<div className="shooting-star"></div>
					<div className="shooting-star"></div>
					<div className="shooting-star"></div>
				</div>
			</div>
		</div>
	);
}
