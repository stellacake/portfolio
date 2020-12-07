import { Switch, Route } from "react-router-dom";

import { Navigation } from "./components/1-Global-components/Navigation";
import { HomePage } from "./components/2-Home/HomePage";
import { AboutPage } from "./components/3-About/AboutPage";
import { SkillsPage } from "./components/4-Skills/SkillsPage";
import { WorkPage } from "./components/5-Work/WorkPage";
import { BonusPage } from "./components/6-Bonus/BonusPage";

import "./assets/css/styles.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/skills" component={SkillsPage} />
				<Route exact path="/work" component={WorkPage} />
				<Route exact path="/bonus" component={BonusPage} />
			</Switch>
			<Navigation />
		</div>
	);
}

export default App;
