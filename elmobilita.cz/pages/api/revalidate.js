export default async function handler(req, res) {
	// Check for secret to confirm this is a valid request.
	if (req.query.key !== process.env.REVALIDATE_API_KEY) {
		return res.status(401).json({ message: "Invalid token" });
	}

	try {
		// this should be the actual path not a rewritten path
		await res.revalidate("/news"); // revalidate page with posts displayed
		await res.revalidate("/news/" + req.body.post.current.slug); // revalidate current post (current is needed for ghost structure)

		return res.json({ revalidated: true });
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		console.log(err);
		return res.status(500).send("Error revalidating");
	}
}
