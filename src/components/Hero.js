import React, { Component } from "react";
import mushi from "../assets/images/mushi.jpg";

class Hero extends Component {
	render() {
		return (
			//<div className="hero" style={{ backgroundImage: `url(${mushi})` }}>
			<div className="hero">
				<h1 className="hero--text">
					Hi! My name is Cami and I'm a designer.
				</h1>
			</div>
		);
	}
}

export default Hero;
