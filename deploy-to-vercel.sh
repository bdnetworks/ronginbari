#!/bin/bash

echo "🚀 Skill Shikhun - Vercel Deployment Script"
echo "==========================================="

# Extract the deployment files
echo "📁 Extracting deployment files..."
tar -xzf skill-shikhun-vercel.tar.gz

# Navigate to the extracted directory
cd skill-shikhun-vercel/

echo "✅ Files extracted successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Initialize git repository:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Bengali Learning Platform - Ready for Vercel'"
echo ""
echo "2. Push to GitHub:"
echo "   git remote add origin YOUR_GITHUB_REPO_URL"
echo "   git push -u origin main"
echo ""
echo "3. Deploy using one of these methods:"
echo ""
echo "   Method A - Vercel Dashboard:"
echo "   • Go to vercel.com"
echo "   • Import your GitHub repository"
echo "   • Deploy automatically"
echo ""
echo "   Method B - Vercel CLI:"
echo "   • npm install -g vercel"
echo "   • vercel login"
echo "   • vercel --prod"
echo ""
echo "🎉 Your Bengali Learning Platform will be live on Vercel!"
echo "📖 Read VERCEL_DEPLOYMENT_INSTRUCTIONS.md for detailed guide"