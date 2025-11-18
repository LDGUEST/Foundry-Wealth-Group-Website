# Foundry Wealth Group Website

Professional website for Foundry Wealth Group, an independent Registered Investment Advisor (RIA).

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Database and backend services
- **Auth0** - Authentication
- **Vercel** - Deployment platform

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file with the following variables:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Auth0
AUTH0_SECRET=your_auth0_secret
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret
```

## Deployment

This project is configured for deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

## Recent Updates

- Implemented Deep Claret & Silver brand color palette
- Redesigned all components with premium wealth management aesthetic
- Added About, Services, and Contact pages
- Integrated Auth0 authentication and Supabase database

