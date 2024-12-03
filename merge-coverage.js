const fs = require('fs');
const path = require('path');

// Directories containing coverage reports
const coverageDirs = [
  './coverage/libs/core',
  './coverage/my-project', // Add additional project directories
];

// Output path for the merged file
const mergedCoveragePath = './coverage/lcov.info';

// Merge logic
let mergedData = '';

coverageDirs.forEach((dir) => {
  const lcovPath = path.join(dir, 'lcov.info');
  if (fs.existsSync(lcovPath)) {
    const data = fs.readFileSync(lcovPath, 'utf8');
    mergedData += data + '\n';
  }
});

fs.writeFileSync(mergedCoveragePath, mergedData, 'utf8');
console.log(`Coverage reports merged into ${mergedCoveragePath}.`);