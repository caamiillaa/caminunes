import React from "react";

const NavBarLinks = props => {
	return (
		<ul className="navbar-links">
			{props.links.map(link => (
				<li key={link.href}>
					<a href={link.href} className="navbar-links--anchor">
						{link.label}
					</a>
				</li>
			))}
		</ul>
	);
};

export default NavBarLinks;
