import React, { Component } from "react";
import Spacer from "../components/Spacer";
import logo from "../assets/images/logo.svg";

class Portfolio extends Component {
	render() {
		return (
			<div className="container" id="portfolio">
				<Spacer />
				<ul className="carousel">
					<li className="card">
						<img src={logo} alt="" className="card--img" />
						<h4 className="card--title">Title</h4>
					</li>
					<li className="card">
						<img src={logo} alt="" className="card--img" />
						<h4 className="card--title">Title</h4>
					</li>
					<li className="card">
						<img src={logo} alt="" className="card--img" />
						<h4 className="card--title">Title</h4>
					</li>
					<li className="card">
						<img src={logo} alt="" className="card--img" />
						<h4 className="card--title">Title</h4>
					</li>
					<li className="card">
						<img src={logo} alt="" className="card--img" />
						<h4 className="card--title">Title</h4>
					</li>
				</ul>
			</div>
		);
	}
}

export default Portfolio;
