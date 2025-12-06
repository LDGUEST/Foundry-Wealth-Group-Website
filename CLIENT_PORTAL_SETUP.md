# Client Portal Setup Guide

## ✅ Implementation Complete

All phases of the client portal have been implemented. Here's what was built:

### What's Been Created

1. **Database Schema** (`DATABASE_SCHEMA.sql`)
   - Users table (synced from Auth0)
   - Documents table (file metadata)
   - Form completions table (track form submissions)
   - Activity log table (audit trail)

2. **Authentication & User Sync**
   - Auth0 integration (using existing setup)
   - User sync on login (`lib/auth0-sync.ts`)
   - Middleware for route protection (`middleware.ts`)

3. **Client Portal** (`/portal`)
   - Dashboard with progress tracker
   - Forms pages (CIS, IPS, Account Setup) with Microsoft Forms iframes
   - Document upload/download center
   - Profile page

4. **Admin Dashboard** (`/admin`)
   - Admin dashboard with stats
   - Clients management table
   - Individual client detail pages

5. **API Routes**
   - `/api/auth/sync` - Sync Auth0 users to database
   - `/api/webhooks/microsoft` - Receive form completion notifications
   - `/api/documents/upload` - Handle file uploads
   - `/api/documents/[id]` - Download documents

6. **UI Components**
   - Portal navigation
   - Progress tracker
   - Form cards
   - Document uploader/list
   - Admin client table

## 🚀 Next Steps (Required)

### 1. Set Up Vercel Postgres Database

```bash
# Option 1: Via Vercel CLI
vercel postgres create client-portal-db

# Option 2: Via Vercel Dashboard
# Go to: Vercel Dashboard → Storage → Postgres → Create Database
```

After creating the database:
1. Copy the connection strings (POSTGRES_URL, POSTGRES_PRISMA_URL, POSTGRES_URL_NON_POOLING)
2. Run `DATABASE_SCHEMA.sql` in the Postgres query editor:
   - Vercel Dashboard → Storage → Postgres → Your Database → Query tab
   - Paste contents of `DATABASE_SCHEMA.sql`
   - Click "Run Query"

### 2. Set Up Vercel Blob Storage

1. Go to Vercel Dashboard → Storage → Blob
2. Click "Create Store"
3. Name it: `client-documents`
4. Copy the `BLOB_READ_WRITE_TOKEN`

### 3. Add Environment Variables

Add these to `.env.local` (for local development) and Vercel Dashboard (for production):

```env
# Admin
ADMIN_EMAIL=logan@foundrywealth.group

# Vercel Postgres (from step 1)
POSTGRES_URL=postgres://...
POSTGRES_PRISMA_URL=postgres://...
POSTGRES_URL_NON_POOLING=postgres://...

# Vercel Blob (from step 2)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# Microsoft Forms (add after creating forms in step 4)
MICROSOFT_FORM_CIS_URL=https://forms.office.com/r/...
MICROSOFT_FORM_IPS_URL=https://forms.office.com/r/...
MICROSOFT_FORM_ACCOUNT_URL=https://forms.office.com/r/...
```

**Important:** Add these to Vercel Dashboard → Settings → Environment Variables for production deployment.

### 4. Create Microsoft Forms

Create 3 forms at https://forms.office.com:

#### Form 1: Client Information Survey (CIS)
- First question: "Email Address" (required, text)
- Add all sections from your CIS document
- Estimated time: 15-20 minutes
- After creating, click "Share" → "Embed" → Copy the iframe URL
- Add to `MICROSOFT_FORM_CIS_URL`

#### Form 2: Investment Policy Statement (IPS)
- First question: "Email Address" (required, text)
- Add risk tolerance, investment objectives, restrictions
- Estimated time: 10 minutes
- Copy embed URL → `MICROSOFT_FORM_IPS_URL`

#### Form 3: Account Setup
- First question: "Email Address" (required, text)
- Add custodian selection, fee acknowledgment, account registration
- Estimated time: 5 minutes
- Copy embed URL → `MICROSOFT_FORM_ACCOUNT_URL`

### 5. Set Up Power Automate Webhooks

For each form, create a Power Automate flow:

1. Go to https://powerautomate.microsoft.com
2. Create new flow → "Automated cloud flow"
3. Trigger: "When a new response is submitted" (Microsoft Forms)
4. Select your form
5. Add action: "Get response details"
6. Add action: "Initialize variable"
   - Name: `respondentEmail`
   - Type: String
   - Value: `@{outputs('Get_response_details')?['body/responderEmail']}`
7. Add action: "HTTP"
   - Method: POST
   - URI: `https://foundrywealth.group/api/webhooks/microsoft`
   - Headers: `Content-Type: application/json`
   - Body:
     ```json
     {
       "email": "@{variables('respondentEmail')}",
       "formName": "CIS",
       "submittedAt": "@{outputs('Get_response_details')?['body/submitDate']}",
       "responseId": "@{outputs('Get_response_details')?['body/responseId']}"
     }
     ```
   - Change `"formName"` to `"IPS"` or `"Account_Setup"` for other forms
8. Save and test

### 6. Test the Portal

1. **Deploy to Vercel** (if not auto-deployed):
   ```bash
   git add .
   git commit -m "Add client portal"
   git push
   ```

2. **Test Client Flow**:
   - Sign up/login with Auth0
   - Visit `/portal`
   - Complete a form (test with Microsoft Forms)
   - Upload a test document
   - Verify progress tracker updates

3. **Test Admin Flow**:
   - Login with `logan@foundrywealth.group`
   - Visit `/admin`
   - View clients list
   - Check form completion status

## 📋 Testing Checklist

- [ ] Database created and schema run successfully
- [ ] Environment variables added to Vercel
- [ ] Microsoft Forms created and URLs added
- [ ] Power Automate flows configured
- [ ] Client can sign up/login
- [ ] Client dashboard shows correct data
- [ ] Forms can be accessed and embedded
- [ ] Form submissions tracked (check database)
- [ ] Documents can be uploaded
- [ ] Documents can be downloaded
- [ ] Admin can access `/admin`
- [ ] Admin can view all clients
- [ ] Admin can see form completion status
- [ ] Mobile responsive design works

## 🔧 Troubleshooting

### Database Connection Issues
- Verify POSTGRES_URL is correct
- Check Vercel Postgres is running
- Ensure schema was run successfully

### File Upload Issues
- Verify BLOB_READ_WRITE_TOKEN is set
- Check file size (max 10MB)
- Verify file type (PDF, JPG, PNG only)

### Form Submissions Not Tracking
- Check Power Automate flow ran successfully
- Verify webhook URL is correct
- Check email matches Auth0 user email
- Review webhook logs in Vercel

### Admin Access Issues
- Verify ADMIN_EMAIL matches your Auth0 email exactly
- Check middleware is allowing admin routes
- Ensure user is logged in with correct email

## 📚 Documentation

- **Database Schema**: See `DATABASE_SCHEMA.sql`
- **API Routes**: See `app/api/` directory
- **Components**: See `components/portal/` and `components/admin/`
- **Brand Colors**: Already configured in Tailwind (Deep Claret #7A0026, Charcoal #36454F, Off-White #FAF9F6)

## 🎉 You're Ready!

Once you complete the setup steps above, your client portal will be fully functional. Clients can complete onboarding forms, upload documents, and track their progress, while you can monitor everything from the admin dashboard.

