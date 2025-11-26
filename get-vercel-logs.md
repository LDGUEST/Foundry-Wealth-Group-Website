# Get Vercel Deployment Logs - Quick Guide

## Deployment ID: `7qzNMGQHqb2xkrFR66yACPi9q3iA`
## Deployment URL: https://vercel.com/logans-projects-e8c7b1a0/foundry-wealth-group-website/7qzNMGQHqb2xkrFR66yACPi9q3iA

## Method 1: Authenticate CLI and Get Logs

Run these commands in PowerShell/Terminal:

```bash
# Step 1: Login (will open browser)
vercel login

# Step 2: Link to project
vercel link

# Step 3: Get deployment info
vercel inspect 7qzNMGQHqb2xkrFR66yACPi9q3iA

# Step 4: Get logs
vercel logs 7qzNMGQHqb2xkrFR66yACPi9q3iA
```

## Method 2: Use Vercel API Directly

1. Get your Vercel access token:
   - Go to: https://vercel.com/account/tokens
   - Create a new token or use existing one

2. Use this API endpoint:
```
GET https://api.vercel.com/v13/deployments/7qzNMGQHqb2xkrFR66yACPi9q3iA/events
Authorization: Bearer YOUR_TOKEN
```

3. Or use curl:
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.vercel.com/v13/deployments/7qzNMGQHqb2xkrFR66yACPi9q3iA/events
```

## Method 3: Check Browser Console

1. Open the deployment page: https://vercel.com/logans-projects-e8c7b1a0/foundry-wealth-group-website/7qzNMGQHqb2xkrFR66yACPi9q3iA
2. Open browser DevTools (F12)
3. Go to Network tab
4. Try to click "Build Logs" or refresh the page
5. Look for failed API requests
6. Check Console tab for JavaScript errors

## Method 4: Check Deployment URL Directly

Try accessing the actual deployment:
- The deployment should have a URL like: `foundry-wealth-group-website-xxx.vercel.app`
- Visit that URL to see if there's an error page
- Check browser console for errors

## What to Look For

Once you get the logs, look for:
- Build errors (missing dependencies, TypeScript errors)
- Environment variable errors
- Framework detection issues
- Resource/timeout errors

