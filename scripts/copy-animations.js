const fs = require('fs')
const path = require('path')

const files = [
  'softwareproduct.json',
  'erp.json',
  'Web Development Animation.json',
  'softwaremaintance.json',
  'Page Not Found 404.json',
  'mobiledevelopment.json',
  'uiux.json'
]

const srcDir = path.join(__dirname, '..', 'src', 'assets')
const destDir = path.join(__dirname, '..', 'public', 'animations')

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

files.forEach((f) => {
  const src = path.join(srcDir, f)
  const dest = path.join(destDir, f)
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest)
      console.log('copied', f)
    } else {
      console.warn('missing source', src)
    }
  } catch (err) {
    console.error('error copying', f, err)
  }
})
