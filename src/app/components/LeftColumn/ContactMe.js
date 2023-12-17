import React from "react";
import EmailContactIcon from "./EmailContactIcon";
import DiscordContactIcon from "./DiscordContactIcon";
import LinkedInContactIcon from "./LinkedInContactIcon";
import GitHubContactIcon from "./GitHubContactIcon";

const ContactMe = () => {
	return (
		<div>
			<h2 class="text-2xl m-4 font-extrabold text-[#e7decd]">Contact Me</h2>
			{/* Maybe add line break */}
			<div className="flex flex-row space-x-4 m-4 border-t-2 border-gray-300 pt-4 w-fit">
				<LinkedInContactIcon />
				<GitHubContactIcon />
				<EmailContactIcon />
				<DiscordContactIcon />
			</div>
		</div>
	);
};

export default ContactMe;
