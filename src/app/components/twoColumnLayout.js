import React from "react";
import LeftColumn from "./LeftColumn/LeftColumn";
import RightColumn from "./RightColumn/RightColumn";

// I might not need to specify a width for the leftColumn, instead just fit to content and add padding.

const TwoColumnLayout = () => {
	return (
		<div className="flex h-screen bg-[#232528] divide-x divide-[#e7decd]">
			<div className="w-2/5 overflow-y-scroll">
				<LeftColumn />
			</div>
			<div className="flex-1 overflow-y-scroll">
				<RightColumn />
			</div>{" "}
		</div>
	);
};

export default TwoColumnLayout;
