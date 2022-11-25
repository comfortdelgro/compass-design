import chalk from 'chalk'
import {execaCommand} from 'execa'
import fs from 'node:fs/promises'

const INPUT_DIR = 'src'
const OUTPUT_DIR = 'dist'

const colors = [chalk.red, chalk.cyan, chalk.yellow, chalk.blue, chalk.green]
const bgs = [
  chalk.bgRed,
  chalk.bgCyan,
  chalk.bgYellow,
  chalk.bgBlue,
  chalk.bgGreen,
]
let execCounter = 0
const runInShell = (c: string) => {
  const index = execCounter++ % colors.length
  const color = colors[index]!
  const bg = bgs[index]!

  console.log(`${bg('Running'.padEnd(10))}: ${color(c)}`)
  return execaCommand(c, {stdio: 'inherit'})
    .then(() => console.log(`${bg('Done'.padEnd(10))}: ${color(c)}`))
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

const premiseOf = <T>(p: Promise<T>) => p.then(() => true).catch(() => false)
const makeCliOptions = (o: Record<string, unknown>) =>
  Object.entries(o)
    .map(([key, value]) => `--${key} ${value}`)
    .join(' ')

const main = async () => {
  // Remove existing dist/ directory to ensure a clean build
  const doesDistExist = await premiseOf(fs.stat(OUTPUT_DIR))
  if (doesDistExist) runInShell(`rimraf ${OUTPUT_DIR}`)

  const tscScript = 'tsc -p tsconfig.build.json'
  const options = {
    declaration: true,
    declarationDir: OUTPUT_DIR,
    emitDeclarationOnly: true,
  }
  void runInShell(`${tscScript} ${makeCliOptions(options)}`)
  // ^ intentionally voided

  // Build
  const swcScript = `swc ${INPUT_DIR} -d ${OUTPUT_DIR}`
  await runInShell(`${swcScript} -C module.type=commonjs`)

  // Generate package.json
  const packageJson = await fs
    .readFile('package.json', 'utf-8')
    .then(JSON.parse)

  packageJson.scripts = {}
  packageJson.devDependencies = {}
  if (packageJson.publishConfig) delete packageJson.publishConfig
  if (packageJson.files) delete packageJson.files

  const references = ['main', 'module', 'types']
  for (const ref of references) {
    if (packageJson[ref]) {
      packageJson[ref] = packageJson[ref].replace(`${OUTPUT_DIR}/`, './')
    }
  }

  await fs.writeFile(
    `${OUTPUT_DIR}/package.json`,
    JSON.stringify(packageJson, null, 2),
  )

  // Copy README.md
  await fs.copyFile('README.md', `${OUTPUT_DIR}/README.md`)
}

main()
