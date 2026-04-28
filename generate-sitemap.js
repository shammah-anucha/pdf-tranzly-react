import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';

const smStream = new SitemapStream({
  hostname: 'https://pdftranzly.com'
});

const urls = [
  '/',
  '/home',
  '/privacy',
  '/terms',
  '/contact'
];

urls.forEach(url => smStream.write({ url }));

smStream.end();

streamToPromise(smStream).then(data => {
  writeFileSync('./public/sitemap.xml', data.toString());
});