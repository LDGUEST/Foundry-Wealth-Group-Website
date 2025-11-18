# Auth0 Setup Guide for Foundry Wealth Group

This guide will walk you through setting up Auth0 authentication for your Next.js application.

## Step 1: Auth0 Dashboard Configuration

Based on your Auth0 dashboard, you have:
- **Domain**: `dev-sdfrjttgvjjazxs3.us.auth0.com`
- **Client ID**: `48r7xKMKtxShevCvdjvWUOY6ryesrGzd`

### Configure Application Settings

1. **Go to Applications → Foundry Wealth Group → Settings**

2. **Set Allowed Callback URLs:**
   ```
   http://localhost:3000/api/auth/callback, https://www.foundrywealth.group/api/auth/callback, https://foundrywealth.group/api/auth/callback
   ```

3. **Set Allowed Logout URLs:**
   ```
   http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group
   ```

4. **Set Allowed Web Origins:**
   ```
   http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group
   ```

5. **Scroll down and click "Save Changes"**

### Get Your Client Secret

1. **Go to Applications → Foundry Wealth Group → Settings**
2. **Click on the "Credentials" tab**
3. **Copy your "Client Secret"** (you'll need this for environment variables)

## Step 2: Environment Variables

Create a `.env.local` file in the root of your project:

```env
AUTH0_SECRET='use openssl rand -hex 32 to generate a secret'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'
```

### Generate AUTH0_SECRET

Run this command in your terminal to generate a secure secret:

**Windows PowerShell:**
```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

**Or use OpenSSL (if installed):**
```bash
openssl rand -hex 32
```

**Or use an online generator:**
- Visit: https://generate-secret.vercel.app/32

## Step 3: Vercel Environment Variables

When deploying to Vercel, add these same environment variables:

1. Go to your Vercel project → Settings → Environment Variables
2. Add each variable:
   - `AUTH0_SECRET` (use the same generated secret)
   - `AUTH0_BASE_URL` (your production URL: `https://www.foundrywealth.group`)
   - `AUTH0_ISSUER_BASE_URL` (`https://dev-sdfrjttgvjjazxs3.us.auth0.com`)
   - `AUTH0_CLIENT_ID` (`48r7xKMKtxShevCvdjvWUOY6ryesrGzd`)
   - `AUTH0_CLIENT_SECRET` (`Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD`)

## Step 4: Test Locally

1. Make sure your `.env.local` file is set up
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000`
4. Click "Login" in the navigation
5. You should be redirected to Auth0 login page
6. After logging in, you'll be redirected back to your app

## Step 5: API Routes Created

The following API routes are automatically handled by Auth0:

- `/api/auth/login` - Initiates login
- `/api/auth/logout` - Logs out user
- `/api/auth/callback` - Auth0 callback handler
- `/api/auth/me` - Get current user (if needed)

## Step 6: Using Auth0 in Your Components

### Check if user is logged in:

```tsx
'use client'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function MyComponent() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (user) {
    return <div>Welcome {user.name}!</div>
  }
  return <div>Please log in</div>
}
```

### Server-side user access:

```tsx
import { getSession } from '@auth0/nextjs-auth0'

export default async function ServerComponent() {
  const session = await getSession()
  const user = session?.user
  
  // Use user data
}
```

## Troubleshooting

### "Invalid state" error
- Make sure your `AUTH0_SECRET` is set correctly
- Clear your browser cookies and try again

### "Redirect URI mismatch"
- Double-check your callback URLs in Auth0 dashboard
- Make sure they match exactly (including http vs https)

### "Invalid client"
- Verify your `AUTH0_CLIENT_ID` and `AUTH0_CLIENT_SECRET` are correct
- Make sure you copied the secret from the Credentials tab, not Settings

## Next Steps

- Customize the login experience in Auth0 Dashboard → Applications → Login Experience
- Set up user roles and permissions if needed
- Configure social logins (Google, Microsoft, etc.) in Auth0 Dashboard → Authentication → Social

