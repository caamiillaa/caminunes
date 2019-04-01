import React, { Component } from "react";
import Logo from "./logo";
import NavBar from "./NavBar";
import NavBarLinks from "./NavBarLinks";

class Header extends Component {
	render() {
		return (
			<NavBar>
				<Logo />
				<NavBarLinks
					links={[
						{ label: "Home", href: "/home/" },
						{ label: "About", href: "/about/" },
						{ label: "Experience", href: "/experience/" },
						{ label: "Portfolio", href: "/portfolio/" },
						{ label: "Contact", href: "/contact/" }
					]}
				/>
			</NavBar>
		);
	}
}

export default Header;
