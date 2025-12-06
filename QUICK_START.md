# Quick Start - Database Setup

## ✅ Credentials Received

I've received your database and blob storage credentials. Here's what to do next:

## Step 1: Verify .env.local File

Make sure your `.env.local` file in the root directory contains:

```env
POSTGRES_URL=postgresql://neondb_owner:npg_cqN1pCzBtd5s@ep-sweet-tooth-ae0hktgl-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
POSTGRES_PRISMA_URL=postgresql://neondb_owner:npg_cqN1pCzBtd5s@ep-sweet-tooth-ae0hktgl-pooler.c-2.us-east-2.aws.neon.tech/neondb?connect_timeout=15&sslmode=require
POSTGRES_URL_NON_POOLING=postgresql://neondb_owner:npg_cqN1pCzBtd5s@ep-sweet-tooth-ae0hktgl.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_CVChnceBNC0bDEAU_jL38GPDLCKfJ5GgoijnWC67rMxPaLD
ADMIN_EMAIL=logan@foundrywealth.group
```

**Important:** Make sure there are NO spaces around the `=` sign and NO quotes around the values.

## Step 2: Test Database Connection

Run:
```bash
npm run test-db
```

This should show:
- ✅ Database connection successful!
- Current time and PostgreSQL version
- List of existing tables (if any)

## Step 3: Run Database Schema

### Option A: Using Neon Dashboard (Easiest)

1. Go to https://console.neon.tech
2. Select your database (`neondb`)
3. Click "SQL Editor" in the left sidebar
4. Open `DATABASE_SCHEMA.sql` from your project
5. Copy ALL the contents
6. Paste into the SQL Editor
7. Click "Run" (or press Ctrl+Enter)

### Option B: Using psql Command Line

```bash
psql "postgresql://neondb_owner:npg_cqN1pCzBtd5s@ep-sweet-tooth-ae0hktgl.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require" -f DATABASE_SCHEMA.sql
```

## Step 4: Verify Tables Created

After running the schema, test again:
```bash
npm run test-db
```

You should now see these tables listed:
- users
- documents
- form_completions
- activity_log

## Step 5: Add to Vercel Dashboard

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable from `.env.local`:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `BLOB_READ_WRITE_TOKEN`
   - `ADMIN_EMAIL`
3. Set them for Production, Preview, and Development environments

## Step 6: Test the Portal

1. Start the dev server: `npm run dev`
2. Visit http://localhost:3000
3. Sign up/login with Auth0
4. Visit http://localhost:3000/portal
5. You should see the dashboard!

## Troubleshooting

### "POSTGRES_URL env var was not found"
- Make sure `.env.local` is in the root directory (same level as `package.json`)
- Check there are no spaces around `=` signs
- Check there are no quotes around values
- Restart your terminal/IDE after creating the file

### "Connection refused" or "Timeout"
- Verify the database is running in Neon dashboard
- Check the connection string is correct
- Make sure `sslmode=require` is included

### Tables already exist errors
- This is fine! It means the schema was already run
- The `IF NOT EXISTS` clauses prevent errors

## Next Steps

After database is set up:
1. Create Microsoft Forms (see `CLIENT_PORTAL_SETUP.md`)
2. Set up Power Automate webhooks
3. Test the full onboarding flow

