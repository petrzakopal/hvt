# Starter Website

# Media to webp conversion

1. Install webp in your desired terminal via brew `brew install webp` from [webp brew](https://formulae.brew.sh/formula/webp).
2. Navigate to the folder containing your file.
3. Run in terminal `cwebp orignal.jpg -o converted.webp`. Replace the names with your file names.
4. When you need to control quality, use `-q` flag. For example `cwebp original.jpg -q 80 -o converted.webp`.

# Environmental variables

## Necessary

Stored in `.env.local` - showed in the first commit.

```
SITE_URL=https://example.com
SITE_NAME=Example.com
ANALYTICS=true
SITE_TWITTER_USERNAME=@
ECOMAIL_API_KEY=
ECOMAIL_DEBUGGING_PROXY_URL=https://private-anon-78e566cd1b-ecomailczv2.apiary-proxy.com
ECOMAIL_PRODUCTION_URL=https://api2.ecomailapp.cz
ECOMAIL_LIST_ID=
SLACK_NOTIFICATION_WEBHOOK_URL=
REVALIDATE_API_KEY=
GHOST_CONTENT_API=
GHOST_URL=
```

## Optional

`ANALYTICS` when set to true, UMAMI analytics will be used in development environment. TODO: Consider Google Tag to be done by this to.

# Middleware

Paste in root folder of Next.js project.

## For redirects.

```javascript
// ./middleware.js

import { NextResponse } from "next/server";

// for redirecting
export function middleware(req) {
	console.log("req");
	return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
	matcher: "/comingsoon",
};
```

## Dummy code, does nothing in middleware.

```javascript
export function middleware() {}
```
