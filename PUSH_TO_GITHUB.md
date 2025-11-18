# Push to GitHub Instructions

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `Foundry-Wealth-Group-Website` (or `foundry-wealth-group-website`)
3. Choose Public or Private
4. **DO NOT** check "Initialize this repository with a README"
5. Click "Create repository"

## Step 2: Connect and Push

After creating the repository, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
cd C:\Users\Admin\foundry-wealth-group-website
git remote add origin https://github.com/YOUR_USERNAME/Foundry-Wealth-Group-Website.git
git branch -M main
git push -u origin main
```

If you're using SSH instead of HTTPS:

```bash
git remote add origin git@github.com:YOUR_USERNAME/Foundry-Wealth-Group-Website.git
git branch -M main
git push -u origin main
```

## Step 3: Connect to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Add your environment variables (Supabase and Auth0) if needed
6. Deploy!

