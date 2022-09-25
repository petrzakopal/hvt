import axios from "axios";

/**
 * @version 0.1
 * Documentation for API NotificationHandler
 * Comment:
 * Use: Handles notification to desired NextJS API
 * -------------------------------------------------------------------------------
 *
 */

export const NotificationHandler = async (message) => {
	await axios({
		method: "post",
		headers: { "Content-Type": "application/json" },
		url: "/api/external/slack-notification",
		data: message,
	});
};
