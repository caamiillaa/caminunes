import React, { Component } from "react";
import AbilityItems from "./AbilityItems";
import Section from "./Section";

class Profile extends Component {
	render() {
		return (
			<Section
				title="about me"
				description="Brazilian, Graphic Designer. Started my web
							designer career in 2007. UI/UX designer,
							front-end programmer, product manager and event
							producer."
			>
				<div>
					<AbilityItems
						title="UX/UI DESIGN"
						description="I've been working with web design for around 11
							years now and I wanna keep doing it. That's my
							passion!"
					/>
					<AbilityItems
						title="WEB DEVELOPMENT"
						description="Programming has always been part of my professional
							life. Making things happen is what I love doing."
					/>
				</div>
				<div>
					<AbilityItems
						title="WEB DESIGN"
						description="Deliver a good experience for the user is essencial.
							It's in the way I think."
					/>
					<AbilityItems
						title="PRODUCT MANAGEMENT"
						description="From research, prototype, development, to track
							results and improving the product."
					/>
				</div>
			</Section>
		);
	}
}

export default Profile;
