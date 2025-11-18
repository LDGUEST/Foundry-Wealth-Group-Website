# Supabase Setup Guide for Foundry Wealth Group

This guide will help you configure Supabase for your Next.js application.

## Your Supabase Configuration

- **Supabase URL**: `https://ujsdqgpzlzfqpzeogzxt.supabase.co`
- **API Key (anon/public)**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2RxZ3B6bHpmcXB6ZW9nenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTA3MjcsImV4cCI6MjA3ODk4NjcyN30.xL82iy-BnbHG6lpvQnuY0UPJdJBVQzhLdGZEUnzv7lw`

## Step 1: Environment Variables

### Local Development (`.env.local`)

Add these variables to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ujsdqgpzlzfqpzeogzxt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2RxZ3B6bHpmcXB6ZW9nenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTA3MjcsImV4cCI6MjA3ODk4NjcyN30.xL82iy-BnbHG6lpvQnuY0UPJdJBVQzhLdGZEUnzv7lw
```

### Vercel Production

1. Go to your Vercel project → **Settings → Environment Variables**
2. Add the same variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://ujsdqgpzlzfqpzeogzxt.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2RxZ3B6bHpmcXB6ZW9nenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTA3MjcsImV4cCI6MjA3ODk4NjcyN30.xL82iy-BnbHG6lpvQnuY0UPJdJBVQzhLdGZEUnzv7lw`

## Step 2: Install Dependencies

Make sure you have the Supabase packages installed:

```bash
npm install @supabase/supabase-js @supabase/ssr
```

## Step 3: Using Supabase in Your Application

### Client-Side Usage

For client components, use the client Supabase instance:

```tsx
'use client'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

export default function MyComponent() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('your_table')
        .select('*')
      
      if (error) {
        console.error('Error:', error)
      } else {
        setData(data)
      }
    }
    
    fetchData()
  }, [])

  return <div>{/* Your component */}</div>
}
```

### Server-Side Usage

For server components, use the server Supabase client:

```tsx
import { createSupabaseServerClient } from '@/lib/supabase-server'

export default async function ServerComponent() {
  const supabase = await createSupabaseServerClient()
  
  const { data, error } = await supabase
    .from('your_table')
    .select('*')
  
  if (error) {
    console.error('Error:', error)
  }
  
  return <div>{/* Your component */}</div>
}
```

## Step 4: Database Setup

### Create Tables

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Navigate to **Table Editor**
3. Create your tables as needed

### Example Table Schema

For a client portal, you might want tables like:

- `clients` - Client information
- `portfolios` - Investment portfolios
- `documents` - Client documents
- `appointments` - Scheduled consultations

### Row Level Security (RLS)

1. Go to **Authentication → Policies** in Supabase Dashboard
2. Enable Row Level Security on your tables
3. Create policies to control access based on user authentication

## Step 5: Storage (Optional)

If you need file storage:

1. Go to **Storage** in Supabase Dashboard
2. Create buckets for different file types
3. Set up policies for access control

## Step 6: Real-time Subscriptions (Optional)

For real-time features:

```tsx
'use client'
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'

export default function RealtimeComponent() {
  useEffect(() => {
    const channel = supabase
      .channel('changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'your_table' },
        (payload) => {
          console.log('Change received!', payload)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return <div>{/* Your component */}</div>
}
```

## Security Best Practices

1. **Never expose service role keys** - Only use the anon/public key in client-side code
2. **Enable RLS** - Always enable Row Level Security on sensitive tables
3. **Use policies** - Create specific policies for each table based on your access requirements
4. **Validate input** - Always validate and sanitize user input before database operations

## Testing

1. Make sure your `.env.local` file has the Supabase variables
2. Run `npm run dev`
3. Test database queries in your components
4. Check the Supabase Dashboard → **Logs** for any errors

## Next Steps

- Set up your database schema
- Configure Row Level Security policies
- Integrate with Auth0 for user authentication
- Create API routes for server-side operations
- Set up file storage if needed

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure `.env.local` exists and has the correct variable names
- Restart your development server after adding environment variables

### Connection errors
- Verify your Supabase URL is correct
- Check that your API key is the anon/public key (not service role)
- Ensure your Supabase project is active

### RLS errors
- Check that Row Level Security is properly configured
- Verify your policies allow the operations you're trying to perform

