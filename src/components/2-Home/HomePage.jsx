import React from "react";

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
					<a href="https://bit.ly/36JJmyi" target="blank" className="button">
						Me contacter
					</a>
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
