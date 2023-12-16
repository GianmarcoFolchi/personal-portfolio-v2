import React from "react";

const TwoColumnLayout = () => {
	return (
		<div className="flex h-screen">
			<div className="w-1/4 bg-gray-200">
				<p>left</p>
			</div>
			<div className="flex flex-1 overflow-hidden">
				<div className="flex-1 overflow-y-scroll">
					<p>right</p>
				</div>
			</div>
		</div>
	);
};

export default TwoColumnLayout;
