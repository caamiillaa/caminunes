import React, { Component } from "react";
import "./assets/style/main.scss";
import Hero from "./views/Hero";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Portfolio from "./views/Portfolio";
import Profile from "./views/Profile";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Hero />
				<Profile />
				<Portfolio />
				<Footer />
			</div>
		);
	}
}

export default App;
