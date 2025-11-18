# Complete Vercel + Auth0 Setup Guide

This guide will walk you through setting up Auth0 authentication with your Vercel deployment step-by-step.

## Prerequisites

- ✅ Your Next.js project is pushed to GitHub
- ✅ Your GitHub repository is connected to Vercel
- ✅ You have access to your Auth0 dashboard
- ✅ You have your Auth0 credentials ready

## Step 1: Configure Auth0 Dashboard for Production

Before deploying to Vercel, you need to configure Auth0 to accept your production domain.

### 1.1 Go to Auth0 Dashboard

1. Visit: https://manage.auth0.com
2. Navigate to: **Applications → Foundry Wealth Group → Settings**

### 1.2 Configure Application URLs

Scroll down to the **Application URIs** section and configure:

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

**Important Notes:**
- Include both `www` and non-`www` versions
- Use `https://` (not `http://`) for production
- Separate multiple URLs with commas
- No trailing slashes

### 1.3 Save Changes

Click **"Save Changes"** at the bottom of the page.

## Step 2: Generate AUTH0_SECRET

You need a random 32-character string for `AUTH0_SECRET`. Use the same value for both local and production.

### Option 1: PowerShell (Windows)

```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

Copy the output - you'll use this same value everywhere.

### Option 2: Online Generator

Visit: https://generate-secret.vercel.app/32

Copy the generated secret.

## Step 3: Configure Vercel Environment Variables

### 3.1 Access Vercel Project Settings

1. Go to: https://vercel.com/dashboard
2. Click on your **Foundry Wealth Group** project
3. Click on **Settings** (in the top navigation)
4. Click on **Environment Variables** (in the left sidebar)

### 3.2 Add Environment Variables

Add each variable one by one. For each variable:

1. Click **"Add New"**
2. Enter the **Name** (exactly as shown below)
3. Enter the **Value**
4. Select **Environment(s)**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development (optional, for preview deployments)
5. Click **"Save"**

### 3.3 Required Environment Variables

Add these variables in this order:

#### Variable 1: AUTH0_SECRET
- **Name**: `AUTH0_SECRET`
- **Value**: `[your_generated_32_char_secret]` (the one you generated in Step 2)
- **Environments**: Production, Preview, Development

#### Variable 2: AUTH0_BASE_URL
- **Name**: `AUTH0_BASE_URL`
- **Value**: `https://www.foundrywealth.group`
- **Environments**: Production, Preview, Development

#### Variable 3: AUTH0_ISSUER_BASE_URL
- **Name**: `AUTH0_ISSUER_BASE_URL`
- **Value**: `https://dev-sdfrjttgvjjazxs3.us.auth0.com`
- **Environments**: Production, Preview, Development

#### Variable 4: AUTH0_CLIENT_ID
- **Name**: `AUTH0_CLIENT_ID`
- **Value**: `48r7xKMKtxShevCvdjvWUOY6ryesrGzd`
- **Environments**: Production, Preview, Development

#### Variable 5: AUTH0_CLIENT_SECRET
- **Name**: `AUTH0_CLIENT_SECRET`
- **Value**: `Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD`
- **Environments**: Production, Preview, Development

### 3.4 Verify All Variables

After adding all variables, you should see 5 environment variables listed:
- ✅ AUTH0_SECRET
- ✅ AUTH0_BASE_URL
- ✅ AUTH0_ISSUER_BASE_URL
- ✅ AUTH0_CLIENT_ID
- ✅ AUTH0_CLIENT_SECRET

## Step 4: Add Supabase Variables (If Not Already Added)

While you're in Environment Variables, also add:

#### Variable 6: NEXT_PUBLIC_SUPABASE_URL
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://ujsdqgpzlzfqpzeogzxt.supabase.co`
- **Environments**: Production, Preview, Development

#### Variable 7: NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2RxZ3B6bHpmcXB6ZW9nenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTA3MjcsImV4cCI6MjA3ODk4NjcyN30.xL82iy-BnbHG6lpvQnuY0UPJdJBVQzhLdGZEUnzv7lw`
- **Environments**: Production, Preview, Development

## Step 5: Redeploy Your Application

After adding environment variables, you need to redeploy:

### Option 1: Trigger New Deployment

1. Go to your project's **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Confirm the redeployment

### Option 2: Push a New Commit

Simply push any change to your GitHub repository, and Vercel will automatically redeploy with the new environment variables.

## Step 6: Verify Your Domain Configuration

### 6.1 Check Vercel Domain

1. Go to your project **Settings → Domains**
2. Verify that `www.foundrywealth.group` (and/or `foundrywealth.group`) is configured
3. If not configured, add your domain:
   - Click **"Add"**
   - Enter `www.foundrywealth.group`
   - Follow the DNS configuration instructions

### 6.2 Verify SSL Certificate

- Vercel automatically provisions SSL certificates
- Make sure your domain shows as "Valid" in the Domains section
- This usually takes a few minutes after adding the domain

## Step 7: Test Authentication

### 7.1 Test Production Login

1. Visit: https://www.foundrywealth.group
2. Click the **"Login"** button in the navigation
3. You should be redirected to Auth0 login page
4. After logging in, you should be redirected back to your site
5. You should see your profile information

### 7.2 Test Logout

1. While logged in, click **"Logout"**
2. You should be logged out and redirected to the homepage

## Step 8: Troubleshooting

### Issue: "Redirect URI mismatch"

**Symptoms:**
- Error message: "redirect_uri_mismatch"
- Login redirect fails

**Solution:**
1. Go to Auth0 Dashboard → Applications → Settings
2. Verify your **Allowed Callback URLs** include:
   - `https://www.foundrywealth.group/api/auth/callback`
   - `https://foundrywealth.group/api/auth/callback`
3. Make sure there are no extra spaces or typos
4. Save changes and wait 30 seconds
5. Try again

### Issue: "Invalid state" error

**Symptoms:**
- Error after clicking login
- "Invalid state" message

**Solution:**
1. Verify `AUTH0_SECRET` is set correctly in Vercel
2. Make sure you're using the **same** `AUTH0_SECRET` in both local and production
3. Clear your browser cookies for the site
4. Try again

### Issue: "Invalid client"

**Symptoms:**
- "Invalid client" error message

**Solution:**
1. Double-check `AUTH0_CLIENT_ID` in Vercel matches: `48r7xKMKtxShevCvdjvWUOY6ryesrGzd`
2. Double-check `AUTH0_CLIENT_SECRET` in Vercel matches your secret
3. Make sure there are no extra spaces when copying
4. Redeploy after fixing

### Issue: Environment variables not working

**Symptoms:**
- App works locally but not on Vercel
- Variables seem undefined

**Solution:**
1. Go to Vercel → Settings → Environment Variables
2. Verify all variables are added
3. Check that they're enabled for **Production** environment
4. **Redeploy** your application (environment variables are only loaded on deployment)
5. Check deployment logs for any errors

### Issue: Domain not working

**Symptoms:**
- Site loads on `.vercel.app` domain but not on custom domain

**Solution:**
1. Go to Vercel → Settings → Domains
2. Verify your domain is added and shows "Valid"
3. Check your DNS settings match Vercel's requirements
4. Wait a few minutes for DNS propagation

## Step 9: Verify Everything Works

### Checklist

- [ ] Auth0 callback URLs configured correctly
- [ ] All 5 Auth0 environment variables added to Vercel
- [ ] Supabase variables added to Vercel (if using)
- [ ] Application redeployed after adding variables
- [ ] Domain configured in Vercel
- [ ] SSL certificate valid
- [ ] Login redirects to Auth0
- [ ] Login redirects back to site after authentication
- [ ] User profile page shows user information
- [ ] Logout works correctly

## Step 10: Local Development Setup

For local development, create a `.env.local` file in your project root:

```env
# Auth0 Configuration
AUTH0_SECRET='[same_secret_you_used_in_vercel]'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://ujsdqgpzlzfqpzeogzxt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2RxZ3B6bHpmcXB6ZW9nenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTA3MjcsImV4cCI6MjA3ODk4NjcyN30.xL82iy-BnbHG6lpvQnuY0UPJdJBVQzhLdGZEUnzv7lw
```

**Important:** Use the **same** `AUTH0_SECRET` value in both local and production!

## Quick Reference

### Vercel Environment Variables Summary

| Variable Name | Value | Notes |
|--------------|-------|-------|
| `AUTH0_SECRET` | `[generated_32_char_string]` | Same for local & production |
| `AUTH0_BASE_URL` | `https://www.foundrywealth.group` | Production URL |
| `AUTH0_ISSUER_BASE_URL` | `https://dev-sdfrjttgvjjazxs3.us.auth0.com` | Your Auth0 domain |
| `AUTH0_CLIENT_ID` | `48r7xKMKtxShevCvdjvWUOY6ryesrGzd` | From Auth0 dashboard |
| `AUTH0_CLIENT_SECRET` | `Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD` | From Auth0 dashboard |

### Auth0 Callback URLs Summary

```
http://localhost:3000/api/auth/callback, https://www.foundrywealth.group/api/auth/callback, https://foundrywealth.group/api/auth/callback
```

## Need Help?

If you encounter issues:

1. Check Vercel deployment logs: **Deployments → Click deployment → View logs**
2. Check browser console for errors (F12 → Console)
3. Verify all environment variables are set correctly
4. Make sure you redeployed after adding variables
5. Wait a few minutes after changing Auth0 settings (propagation delay)

## Next Steps

Once authentication is working:

- Customize the login experience in Auth0 Dashboard
- Set up user roles and permissions
- Configure social logins (Google, Microsoft, etc.)
- Integrate user data with Supabase
- Build protected routes and pages

