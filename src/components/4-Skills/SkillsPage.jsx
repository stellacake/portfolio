import React from "react";
import { Telescope } from "./Telescope";

import "../../assets/css/styles.css";

export function SkillsPage() {
	return (
		<div className="skillspage">
			<h1>Compétences</h1>
			<div className="skills-content">
				<div className="skills-box">
					<h2>Stack</h2>
					<p>JavaScript</p>
					<p>React.js</p>
					<p>Node.js</p>
					<p>Express</p>
					<p>RESTful API</p>
					<p>TypeScript</p>
				</div>
				<div className="skills-box">
					<div className="tool-box">
						<h2>Outils</h2>
						<p>
							<a
								className="p-link"
								href="https://bit.ly/3gtnJWp"
								target="blank"
							>
								GitHub
							</a>
							/GitLab
						</p>
						<p>MySQL server/Workbench</p>
						<p>Postman</p>
						<p>Figma</p>
					</div>
					<div className="method-box">
						<h2>Méthodes</h2>
						<p>Méthode Agile Scrum</p>
						<p>Revue de code sur Git</p>
						<p>Test Driven Development</p>
					</div>
				</div>
				<div className="telescope-box">
					<Telescope />
				</div>
			</div>
		</div>
	);
}
