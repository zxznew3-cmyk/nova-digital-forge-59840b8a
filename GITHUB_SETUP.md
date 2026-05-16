# GitHub Upload Instructions

## Steps to Upload to GitHub

### 1. Initialize Git Repository (if not already done)

```bash
cd nova-digital-forge
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 2. Add All Changes

```bash
git add .
```

### 3. Commit Changes

```bash
git commit -m "Initial commit: Remove Lovable dependencies and prepare for GitHub"
```

### 4. Create GitHub Repository

1. Go to [GitHub.com](https://github.com/new)
2. Create a new repository named `nova-digital-forge`
3. Do NOT initialize with README, .gitignore, or license (we already have these)

### 5. Add Remote and Push

Replace `<YOUR_USERNAME>` with your GitHub username:

```bash
git remote add origin https://github.com/<YOUR_USERNAME>/nova-digital-forge.git
git branch -M main
git push -u origin main
```

## Changes Made

The following LOVABLE references have been removed:

✅ Removed `@lovable.dev/vite-tanstack-config` from package.json
✅ Updated vite.config.ts with standard Vite configuration
✅ Removed .lovable/ directory
✅ Removed bun.lock (will be regenerated with clean dependencies)
✅ Added .lovable to .gitignore
✅ Created README.md

## Next Steps

1. Run `bun install` (or `npm install`) to regenerate dependencies
2. Test the application locally with `bun run dev`
3. Follow the Git setup steps above to upload to GitHub

## Important Notes

- Make sure to add your GitHub token or SSH key if using HTTPS/SSH
- The project is ready to be deployed on Cloudflare Pages
- Update the repository URL in the README.md if needed
