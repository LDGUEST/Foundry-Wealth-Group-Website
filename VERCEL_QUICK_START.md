# Vercel + Auth0 Quick Start Checklist

Use this checklist to quickly set up Auth0 with Vercel.

## ✅ Pre-Deployment Checklist

- [ ] Auth0 Application created
- [ ] Auth0 Client ID noted: `48r7xKMKtxShevCvdjvWUOY6ryesrGzd`
- [ ] Auth0 Client Secret noted: `Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD`
- [ ] AUTH0_SECRET generated (32-character random string)
- [ ] Project pushed to GitHub
- [ ] GitHub repository connected to Vercel

## ✅ Auth0 Dashboard Configuration

1. Go to: https://manage.auth0.com
2. Navigate to: **Applications → Foundry Wealth Group → Settings**
3. Set **Allowed Callback URLs**:
   ```
   http://localhost:3000/api/auth/callback, https://www.foundrywealth.group/api/auth/callback, https://foundrywealth.group/api/auth/callback
   ```
4. Set **Allowed Logout URLs**:
   ```
   http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group
   ```
5. Set **Allowed Web Origins**:
   ```
   http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group
   ```
6. Click **"Save Changes"**

## ✅ Vercel Environment Variables

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these 5 variables (enable for Production, Preview, Development):

1. **AUTH0_SECRET**
   - Value: `[your_generated_32_char_secret]`

2. **AUTH0_BASE_URL**
   - Value: `https://www.foundrywealth.group`

3. **AUTH0_ISSUER_BASE_URL**
   - Value: `https://dev-sdfrjttgvjjazxs3.us.auth0.com`

4. **AUTH0_CLIENT_ID**
   - Value: `48r7xKMKtxShevCvdjvWUOY6ryesrGzd`

5. **AUTH0_CLIENT_SECRET**
   - Value: `Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD`

## ✅ Redeploy

After adding environment variables:

1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

## ✅ Test

1. Visit: https://www.foundrywealth.group
2. Click **"Login"**
3. Should redirect to Auth0
4. After login, should redirect back
5. Should see user profile

## 🐛 Common Issues

**"Redirect URI mismatch"**
→ Check Auth0 callback URLs match exactly

**"Invalid state"**
→ Verify AUTH0_SECRET is set correctly

**Variables not working**
→ Make sure you redeployed after adding variables

## 📝 Local Development

Create `.env.local` with:
```env
AUTH0_SECRET='[same_as_vercel]'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'
```

