import React from "react";

const EmailContactIcon = () => {
	return (
		<div className="inline-block border-solid border-l border-r border-t border-b border-[#e7decd] rounded-md border-opacity-25 shadow-sm p-2">
			<a href="mailto:gmfolc@gmail.com">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					className="bi bi-envelope-arrow-up-fill text-white  opacity-50 transition-opacity  hover:opacity-100"
					viewBox="0 0 16 16"
				>
					<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207z" />
					<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z" />
				</svg>
			</a>
		</div>
	);
};

export default EmailContactIcon;
