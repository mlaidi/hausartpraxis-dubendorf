const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const preloads = html.match(/<link[^>]*rel="preload"[^>]*>/g) || [];
const imgs = html.match(/<img[^>]*>/g) || [];

console.log("PRELOADS:");
preloads.forEach(p => console.log(p));

console.log("\nIMGS:");
imgs.forEach(i => console.log(i));
