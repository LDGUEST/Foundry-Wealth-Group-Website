# Environment Variables - Complete Setup

This document contains all environment variables needed for the Foundry Wealth Group website.

## Local Development (`.env.local`)

Create a `.env.local` file in the root of your project with all these variables:

```env
# Auth0 Configuration
AUTH0_SECRET='generate_random_32_char_string'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://ujsdqgpzlzfqpzeogzxt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2RxZ3B6bHpmcXB6ZW9nenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTA3MjcsImV4cCI6MjA3ODk4NjcyN30.xL82iy-BnbHG6lpvQnuY0UPJdJBVQzhLdGZEUnzv7lw

# Resend Email Configuration
RESEND_API_KEY=re_HawzDXWU_HwTi4rmvdViAm4YDL7mJXF7H
```

## Vercel Production

Add these same variables in **Vercel Dashboard → Project Settings → Environment Variables**:

```env
# Auth0 Configuration
AUTH0_SECRET='same_secret_as_local'
AUTH0_BASE_URL='https://www.foundrywealth.group'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://ujsdqgpzlzfqpzeogzxt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2RxZ3B6bHpmcXB6ZW9nenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTA3MjcsImV4cCI6MjA3ODk4NjcyN30.xL82iy-BnbHG6lpvQnuY0UPJdJBVQzhLdGZEUnzv7lw

# Resend Email Configuration
RESEND_API_KEY=re_HawzDXWU_HwTi4rmvdViAm4YDL7mJXF7H
```

## Variable Descriptions

### Auth0 Variables

- **AUTH0_SECRET**: A random 32-character string used for session encryption
  - Generate with: PowerShell command or https://generate-secret.vercel.app/32
- **AUTH0_BASE_URL**: Your application's base URL
  - Local: `http://localhost:3000`
  - Production: `https://www.foundrywealth.group`
- **AUTH0_ISSUER_BASE_URL**: Your Auth0 tenant domain
  - `https://dev-sdfrjttgvjjazxs3.us.auth0.com`
- **AUTH0_CLIENT_ID**: Your Auth0 application client ID
  - `48r7xKMKtxShevCvdjvWUOY6ryesrGzd`
- **AUTH0_CLIENT_SECRET**: Your Auth0 application client secret
  - Get from: Auth0 Dashboard → Applications → Foundry Wealth Group → Credentials tab

### Supabase Variables

- **NEXT_PUBLIC_SUPABASE_URL**: Your Supabase project URL
  - `https://ujsdqgpzlzfqpzeogzxt.supabase.co`
- **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Your Supabase anonymous/public API key
  - `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2RxZ3B6bHpmcXB6ZW9nenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTA3MjcsImV4cCI6MjA3ODk4NjcyN30.xL82iy-BnbHG6lpvQnuY0UPJdJBVQzhLdGZEUnzv7lw`

### Resend Email Variables

- **RESEND_API_KEY**: Your Resend API key for sending contact form emails
  - Get from: https://resend.com/api-keys
  - Contact forms send emails to: `info@foundrywealth.group`
  - Note: For production, verify your domain in Resend dashboard to use a custom "from" address

## Important Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use the same AUTH0_SECRET** for both local and production
3. **NEXT_PUBLIC_*** variables are exposed to the browser - only use public keys
4. **Restart dev server** after adding/changing environment variables
5. **Redeploy on Vercel** after adding new environment variables

## Quick Setup Commands

### Generate AUTH0_SECRET (PowerShell)
```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

### Verify Environment Variables
```bash
# Check if .env.local exists
ls .env.local

# View variables (be careful not to expose secrets)
cat .env.local
```

