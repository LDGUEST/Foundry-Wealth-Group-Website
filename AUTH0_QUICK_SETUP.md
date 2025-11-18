# Auth0 Quick Setup - Foundry Wealth Group

## Your Domain
**Production Domain**: `https://www.foundrywealth.group`

## Auth0 Dashboard Configuration

### Step 1: Configure URLs in Auth0

Go to: **Applications → Foundry Wealth Group → Settings**

**Allowed Callback URLs:**
```
http://localhost:3000/api/auth/callback, https://www.foundrywealth.group/api/auth/callback, https://foundrywealth.group/api/auth/callback
```

**Allowed Logout URLs:**
```
http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group
```

**Allowed Web Origins:**
```
http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group
```

Click **"Save Changes"**

### Step 2: Get Your Client Secret

Go to: **Applications → Foundry Wealth Group → Credentials tab**

Copy the **Client Secret** (you'll need this for environment variables)

### Step 3: Environment Variables

**For Local Development** (`.env.local`):
```env
AUTH0_SECRET='generate_random_32_char_string'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'
```

**For Vercel Production** (Vercel Dashboard → Settings → Environment Variables):
```env
AUTH0_SECRET='same_secret_as_local'
AUTH0_BASE_URL='https://www.foundrywealth.group'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'
```

### Generate AUTH0_SECRET

**PowerShell:**
```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

**Or use:** https://generate-secret.vercel.app/32

## Testing

1. Set up `.env.local` with your values
2. Run `npm run dev`
3. Visit `http://localhost:3000`
4. Click "Login" - should redirect to Auth0
5. After login, you'll be redirected back

## Important Notes

- Use the **same** `AUTH0_SECRET` for both local and production
- Make sure callback URLs in Auth0 match exactly (including www vs non-www)
- After updating Auth0 settings, wait a few seconds for changes to propagate

