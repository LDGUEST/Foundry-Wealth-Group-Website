# Auth0 Configuration Summary

## Application Details

- **Application Name**: Foundry Wealth Group
- **Application Type**: Regular Web Applications
- **Client ID**: `48r7xKMKtxShevCvdjvWUOY6ryesrGzd`
- **Domain**: `dev-sdfrjttgvjjazxs3.us.auth0.com`
- **Management API**: `https://dev-sdfrjttgvjjazxs3.us.auth0.com/api/v2/`

## Required Configuration

### 1. Auth0 Dashboard Settings

**Application Settings → URLs:**
- **Allowed Callback URLs**: 
  ```
  http://localhost:3000/api/auth/callback, https://www.foundrywealth.group/api/auth/callback, https://foundrywealth.group/api/auth/callback
  ```
- **Allowed Logout URLs**: 
  ```
  http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group
  ```
- **Allowed Web Origins**: 
  ```
  http://localhost:3000, https://www.foundrywealth.group, https://foundrywealth.group
  ```

### 2. Environment Variables

**Local Development (`.env.local`):**
```env
AUTH0_SECRET='generate_random_32_char_string'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'
```

**Production (Vercel):**
```env
AUTH0_SECRET='same_as_local'
AUTH0_BASE_URL='https://www.foundrywealth.group'
AUTH0_ISSUER_BASE_URL='https://dev-sdfrjttgvjjazxs3.us.auth0.com'
AUTH0_CLIENT_ID='48r7xKMKtxShevCvdjvWUOY6ryesrGzd'
AUTH0_CLIENT_SECRET='Nv9k8sMRRbfA1ZR--AyugCgLZqmsiG1sOYdHlVpSLuhh-lPP_qMr8qN9x4fX3udD'
```

### 3. Get Client Secret

1. Go to **Applications → Foundry Wealth Group**
2. Click on **Credentials** tab
3. Copy the **Client Secret**

## Management API

The Management API is available at:
- **API Identifier**: `https://dev-sdfrjttgvjjazxs3.us.auth0.com/api/v2/`

This can be used for:
- User management operations
- Application configuration
- Advanced Auth0 features

To use the Management API, you'll need a Management API token (different from your application credentials).

## Quick Reference

- **Dashboard**: https://manage.auth0.com
- **Tenant**: `dev-sdfrjttgvjjazxs3`
- **Region**: US
- **Application Type**: Regular Web Application (Next.js)

