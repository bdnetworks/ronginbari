#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building Skill Shikhun for Vercel deployment...\n');

try {
  // Step 1: Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  
  // Step 2: Build the React frontend
  console.log('⚛️  Building React frontend...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  // Step 3: Build the Express backend
  console.log('🏗️  Building Express backend...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --target=node18', { stdio: 'inherit' });
  
  // Step 4: Ensure API directory exists
  console.log('📁 Setting up API directory...');
  if (!fs.existsSync('api')) {
    fs.mkdirSync('api', { recursive: true });
  }
  
  // Step 5: Create package.json for serverless function
  const serverlessPackage = {
    "type": "module",
    "dependencies": {
      "express": "^4.21.2",
      "zod": "^3.23.8"
    }
  };
  
  fs.writeFileSync('api/package.json', JSON.stringify(serverlessPackage, null, 2));
  
  // Step 6: Verify build outputs
  console.log('✅ Verifying build outputs...');
  
  const requiredFiles = [
    'dist/public/index.html',
    'dist/index.js',
    'api/index.js',
    'vercel.json'
  ];
  
  let allFilesExist = true;
  requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      console.error(`❌ Missing required file: ${file}`);
      allFilesExist = false;
    } else {
      console.log(`✓ ${file}`);
    }
  });
  
  if (allFilesExist) {
    console.log('\n🎉 Build successful! Ready for Vercel deployment.');
    console.log('\n📋 Next steps:');
    console.log('   1. Install Vercel CLI: npm i -g vercel');
    console.log('   2. Login: vercel login');
    console.log('   3. Deploy: vercel --prod');
    console.log('\n🌐 Your Skill Shikhun platform will be live on Vercel!');
  } else {
    console.error('\n❌ Build failed. Please check the errors above.');
    process.exit(1);
  }
  
} catch (error) {
  console.error('\n❌ Build failed with error:', error.message);
  process.exit(1);
}