import fs from 'node:fs/promises'
import path from 'node:path'

import {importDirectory} from '@iconify/tools/lib/import/directory'
import {cleanupSVG} from '@iconify/tools/lib/svg/cleanup'
import {transform} from '@svgr/core'
import {execaCommand} from 'execa'

// Utils

const runInShell = (c: string) =>
  execaCommand(c, {stdio: 'inherit'}).catch(() => process.exit(1))

function dirExists(dir: string): Promise<boolean> {
  return fs
    .stat(dir)
    .then(() => true)
    .catch(() => false)
}

// from StackOverflow of course
function toPascalCase(s: string): string {
  return `${s}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`,
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase())
}

// Configuration
const prefix = 'compass'
const name = 'Compass Icons'
// paths relative from root
const input = './svgs/'
const iconifyOutput = './iconify/'
const reactOutput = './react/'

// Import icons
const iconSet = await importDirectory(input, {prefix})
// Saving width, height, left, right of svg
const dimensions = []
// Validate, clean up, fix palette and optimise
await iconSet.forEach(async (name, type) => {
  if (type !== 'icon') {
    return
  }

  const svg = iconSet.toSVG(name)
  if (!svg) {
    // Invalid icon
    iconSet.remove(name)
    return
  }
  dimensions[name] = svg.viewBox

  // Clean up and optimise icons
  try {
    await cleanupSVG(svg)
    // await runSVGO(svg, {cleanupIDs: false})
  } catch (err) {
    // Invalid icon
    console.error(`Error parsing ${name}:`, err)
    iconSet.remove(name)
    return
  }

  // Update icon
  iconSet.fromSVG(name, svg)
})

// Export icon set to JSON
const exported = iconSet.export()

// delete exported.lastModified // useless
// const iconsCount = Object.keys(exported.icons).length
// const json = {info: {name, length: iconsCount}, ...exported}

// Write iconify files

// Template
const modules = {
  cjs: 'module.exports = data',
  esm: 'export default data',
}

const iconifyPath = path.normalize(iconifyOutput)
if (await dirExists(iconifyPath)) await fs.rmdir(iconifyPath, {recursive: true})
await fs.mkdir(iconifyPath)

console.log(`Writing iconify outputs at "${iconifyOutput}"...`)
for (const iconName in exported.icons) {
  const des = dimensions[iconName]
  const icon = exported.icons[iconName]
  icon.width = des.width
  icon.height = des.height
  const data = `const data = ${JSON.stringify(icon)}`

  // Write CJS
  fs.writeFile(
    path.join(iconifyOutput, `${iconName}.cjs`),
    [data, modules.cjs].join(';').trim(),
  )

  // Write ESM
  fs.writeFile(
    path.join(iconifyOutput, `${iconName}.mjs`),
    [data, modules.esm].join(';').trim(),
  )

  // Write DTS
  fs.writeFile(
    path.join(iconifyOutput, `${iconName}.d.ts`),
    `
      declare const data: {width: number; height: number; body: string}
      export default data`,
  )
}

// Write react files

const reactPath = path.normalize(reactOutput)
if (await dirExists(reactPath)) await fs.rmdir(reactPath, {recursive: true})
await fs.mkdir(reactPath)

console.log(`Writing react outputs at "${reactOutput}"...`)
for (const iconName in exported.icons) {
  const icon = exported.icons[iconName]
  const des = dimensions[iconName]
  const svg = `<svg width="1em" height="1em" viewBox="0 0 ${des.width} ${des.height}">${icon.body}</svg>`
  const tsCode = await transform(
    svg,
    {icon: true, typescript: true},
    {componentName: toPascalCase(iconName)},
  )

  // Write TS
  const tsxFileName = path.join(reactOutput, `${iconName}.tsx`)
  await fs.writeFile(tsxFileName, tsCode)
  // Write CJS
  await runInShell(
    `swc ${tsxFileName} -o ${path.join(
      reactOutput,
      `${iconName}.cjs`,
    )} -C module.type=commonjs`,
  )
  // Write ESM
  await runInShell(
    `swc ${tsxFileName} -o ${path.join(
      reactOutput,
      `${iconName}.mjs`,
    )} -C module.type=es6`,
  )
}

// Write index files (TS, CJS, ESM) into React folder
let indexFileContent: {[key: string]: string} = {}

for (const iconName in exported.icons) {
  const icon = exported.icons[iconName]
  const des = dimensions[iconName]
  const svg = `<svg width="1em" height="1em" viewBox=" ${des.left} ${des.top} ${des.width} ${des.height}">${icon.body}</svg>`
  indexFileContent[iconName] = svg
}

const tsxIndexFileName = path.join(reactOutput, `index.tsx`)

let indexFileExport = `export default
   ${JSON.stringify(indexFileContent)}
   ;`

await fs.writeFile(tsxIndexFileName, indexFileExport)

await runInShell(
  `swc ${tsxIndexFileName} -o ${path.join(
    reactOutput,
    `index.mjs`,
  )} -C module.type=commonjs`,
)

await runInShell(
  `swc ${tsxIndexFileName} -o ${path.join(
    reactOutput,
    `index.mjs`,
  )} -C module.type=es6`,
)

await runInShell(`tsc --declaration --emitDeclarationOnly`)
await runInShell(`rimraf react/**/*.tsx`)
