import React, { Component } from "react";

const AbilityItems = props => (
	<div className="profile--item">
		<h5 className="profile--item__title">{props.title}</h5>
		<p className="profile--item__text">{props.description}</p>
	</div>
);

export default AbilityItems;
