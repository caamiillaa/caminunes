import React, { Component } from "react";

const Section = props => (
	<div className="section">
		<div className="flexbox container">
			<div>
				<div className="block-title">
					<h1 className="block-title--title">
						<span className="block-title--title__detail">[</span>
						{props.title}
					</h1>
					<p className="block-title--text">{props.description}</p>
				</div>
			</div>
			<div className="flexbox">{props.children}</div>
		</div>
	</div>
);

export default Section;
