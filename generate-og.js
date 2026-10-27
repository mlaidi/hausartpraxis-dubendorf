const sharp = require('sharp');
const fs = require('fs');

sharp('public/images/banner.webp')
  .resize(1200, 630, {
    fit: 'cover',
    position: 'center'
  })
  .jpeg({ quality: 90 })
  .toFile('public/og-image.jpg')
  .then(() => console.log('OG Image successfully created'))
  .catch(err => console.error('Error creating OG image:', err));
