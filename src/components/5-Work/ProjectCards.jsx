import React from "react";
import "../../assets/css/styles.css";

export function ProjectCards(props) {
	const { project } = props;
	return (
		<a className="project-link" href={project.url} target="blank">
			<div className="project-box">
				<img src={project.img} alt={project.name} />
				<h2 className="portfolio-name">{project.name}</h2>
				<p>{project.team}</p>
				<p>{project.description}</p>
				<p>{project.tools}</p>
			</div>
		</a>
	);
}
