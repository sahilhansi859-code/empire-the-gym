const fs = require('fs')
const path = require('path')

const indexHtml = path.resolve(__dirname, '..', 'client', 'dist', 'index.html')
let html = fs.readFileSync(indexHtml, 'utf8')

const cssLinkRegex = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/

html = html.replace(cssLinkRegex, (match, href) => {
  return `<link rel="preload" as="style" crossorigin href="${href}" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
})

fs.writeFileSync(indexHtml, html)
console.log('Render-blocking CSS rewritten to non-blocking preload')
