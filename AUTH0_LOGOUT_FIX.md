# Auth0 Logout Error Fix

## Problem
When signing out, you see an error: "Oops!, something went wrong" from Auth0.

## Root Cause
The current domain (e.g., Vercel preview URL) is not in the **Allowed Logout URLs** list in your Auth0 dashboard.

## Solution

### Step 1: Update Auth0 Dashboard

1. Go to https://manage.auth0.com
2. Navigate to **Applications → Foundry Wealth Group → Settings**
3. Scroll to **Application URIs** section
4. Update **Allowed Logout URLs** to include:

```
http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group, https://*.vercel.app
```

**Important:** 
- The `https://*.vercel.app` wildcard will allow all Vercel preview deployments
- Make sure there are NO trailing slashes
- Separate URLs with commas

### Step 2: Save Changes

Click **"Save Changes"** at the bottom of the page.

### Step 3: Test

1. Try logging out again
2. You should be redirected to the homepage (`/`) after logout

## Alternative: Use Full URL for returnTo

If you're still having issues, you can modify the logout links to use full URLs:

```tsx
// Instead of:
href="/api/auth/logout?returnTo=/"

// Use:
href={`/api/auth/logout?returnTo=${window.location.origin}/`}
```

However, the Auth0 dashboard configuration is the proper fix.

## Current Logout Links Updated

All logout links now include `?returnTo=/` to redirect to homepage after logout:
- PortalNav: `/api/auth/logout?returnTo=/`
- Navigation: `/api/auth/logout?returnTo=/`
- Admin Layout: `/api/auth/logout?returnTo=/`

