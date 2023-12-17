import React from "react";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe";
import ProfileImage from "./ProfileImage"
import LeftColumnTitle from "./LeftColumnTitle"

const LeftColumn = () => {
	return (
		<div className="w-full">
			<LeftColumnTitle/>
			<ProfileImage/>
			<AboutMe />
			<ContactMe />
		</div>
	);
};

export default LeftColumn;
