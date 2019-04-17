import React, { Component } from "react";
import "./assets/style/main.scss";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";

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
