import axios from "axios";

/**
 * @version 0.1
 * Documentation for API SlackNotificationHandler
 * Comment: API endpoint for contacting Slack Webhook to send messages.
 * Use:
 * -------------------------------------------------------------------------------
 *
 */

export default async function SlackNotificationHandler(req, res) {
	try {
		await axios({
			method: "post",
			headers: { "Content-Type": "application/json" },
			url: process.env.SLACK_NOTIFICATION_WEBHOOK_URL,
			data: req.body,
		}).then((response) => {
			// console.log(response);
		});
	} catch (e) {
		// console.log(e);
	}
}
