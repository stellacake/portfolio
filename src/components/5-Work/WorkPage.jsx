import React from "react";
import { ProjectCards } from "./ProjectCards";
import "../../assets/css/styles.css";

import puntacana from "../../assets/images/portfolio-puntacana.png";
import tlorean from "../../assets/images/portfolio-tlorean.png";
import ridy from "../../assets/images/portfolio-ridy.png";

export function WorkPage() {
	const projects = [
		{
			name: "T-Lorean",
			team: "Projet d’équipe (4 pers)",
			description: "Création d'une application de voyages dans le temps",
			tools: "React.js, Node.js, Postman",
			img: `${tlorean}`,
			url: "https://t-lorean-app.herokuapp.com/",
		},
		{
			name: "Ridy / Hackathon de 24h",
			team: "Projet d'équipe (5 pers)",
			description: `Thème "Back to the Future"${" "}: créer une solution pour une époque du passé • Ridy est une application qui aide les chevaliers, vassaux, troubadours, etc. à trouver et louer des moyens de transports entre particuliers.`,
			tools:
				"React.js, Node.js, Express, MySQL Workbench, Postman, API Google Maps",
			img: `${ridy}`,
			url: "https://ridy.herokuapp.com/",
		},
		{
			name: "Punta Cana Bar",
			team: "Projet d’équipe (4 pers)",
			description: "Création d'un site vitrine avec formulaire",
			tools: "HTML5, CSS3, Vanilla JS",
			img: `${puntacana}`,
			url: "https://stellacake.github.io/punta-cana-bar/",
		},
	];
	return (
		<div className="workpage">
			<h1>Portfolio</h1>
			<div className="projects-container">
				{projects.map((project) => (
					<ProjectCards key={project.name} project={project} />
				))}
			</div>
		</div>
	);
}
