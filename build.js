import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔨 Building for Vercel deployment...');

// Build the client (React app)
console.log('📦 Building client...');
execSync('npm run build', { stdio: 'inherit' });

// Copy server files
console.log('📁 Preparing server files...');
if (!fs.existsSync('api')) {
  fs.mkdirSync('api', { recursive: true });
}

// Create Vercel serverless function
const serverlessCode = `
import app from '../dist/index.js';

export default app;
`;

fs.writeFileSync('api/index.js', serverlessCode);

console.log('✅ Build complete! Ready for Vercel deployment.');
console.log('📋 Deployment steps:');
console.log('   1. Install Vercel CLI: npm i -g vercel');
console.log('   2. Login to Vercel: vercel login');
console.log('   3. Deploy: vercel --prod');