import React from "react";

const NavBar = props => (
	<header className="navbar" id={props.id}>
		<div className="navbar--body container">{props.children}</div>
	</header>
);

export default NavBar;
