# Environment Variables Setup

## Step 1: Create .env.local File

Create a `.env.local` file in the root directory with the following content:

```env
# Database (Neon Postgres)
POSTGRES_URL=postgresql://neondb_owner:npg_cqN1pCzBtd5s@ep-sweet-tooth-ae0hktgl-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
POSTGRES_PRISMA_URL=postgresql://neondb_owner:npg_cqN1pCzBtd5s@ep-sweet-tooth-ae0hktgl-pooler.c-2.us-east-2.aws.neon.tech/neondb?connect_timeout=15&sslmode=require
POSTGRES_URL_NON_POOLING=postgresql://neondb_owner:npg_cqN1pCzBtd5s@ep-sweet-tooth-ae0hktgl.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_CVChnceBNC0bDEAU_jL38GPDLCKfJ5GgoijnWC67rMxPaLD

# Admin
ADMIN_EMAIL=logan@foundrywealth.group

# Microsoft Forms (add after creating forms)
MICROSOFT_FORM_CIS_URL=
MICROSOFT_FORM_IPS_URL=
MICROSOFT_FORM_ACCOUNT_URL=
```

## Step 2: Add to Vercel Dashboard

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable above for Production, Preview, and Development environments
3. Make sure to add the same values

## Step 3: Run Database Schema

After creating `.env.local`, run the database schema:

### Option 1: Using Neon Dashboard (Recommended)
1. Go to https://console.neon.tech
2. Select your database
3. Go to "SQL Editor"
4. Copy and paste the contents of `DATABASE_SCHEMA.sql`
5. Click "Run"

### Option 2: Using psql command line
```bash
psql "postgresql://neondb_owner:npg_cqN1pCzBtd5s@ep-sweet-tooth-ae0hktgl.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require" -f DATABASE_SCHEMA.sql
```

## Step 4: Verify Setup

Test the connection by running:
```bash
npm run dev
```

Then visit `/portal` (you'll need to login first) to verify everything works.

