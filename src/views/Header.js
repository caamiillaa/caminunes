import React, { Component } from "react";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import NavBarLinks from "../components/NavBarLinks";

class Header extends Component {
	render() {
		return (
			<NavBar>
				<Logo />
				<NavBarLinks
					links={[
						{ label: "Home", href: "#home" },
						{ label: "About", href: "#about" },
						{ label: "Experience", href: "#experience" },
						{ label: "Portfolio", href: "#portfolio" },
						{ label: "Contact", href: "#contact" }
					]}
				/>
			</NavBar>
		);
	}
}

export default Header;
