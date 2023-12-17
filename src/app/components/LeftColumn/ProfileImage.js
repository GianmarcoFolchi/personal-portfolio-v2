import React from "react";
import gianmarcoFolchiProfilePic from "./../../assets/Gianmarco-Folchi-Picture.jpg";
import Image from "next/image";

const ProfileImage = () => {
	return (
		<Image
			src={gianmarcoFolchiProfilePic}
			alt="Gianmarco Folchi Picture"
			className="rounded-full mx-auto w-1/2 m-4"
		/>
	);
};

export default ProfileImage;
