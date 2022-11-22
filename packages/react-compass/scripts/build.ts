import {execaCommand} from 'execa'
import Listr, {ListrTask} from 'listr'
import fs from 'node:fs/promises'

//=================================== CONFIG ===================================
const INPUT_DIR = 'src'
const OUTPUT_DIR = 'dist'
const OUTPUT_COMMONJS_DIR = 'dist/commonjs'
const OUTPUT_ESM_DIR = 'dist/esm'

//=================================== UTILS ===================================
const runInShell = (c: string) =>
  execaCommand(c, {stdio: 'inherit'}).catch(() => process.exit(1))
const premiseOf = <T>(p: Promise<T>) => p.then(() => true).catch(() => false)
const makeCliOptions = (o: Record<string, unknown>) =>
  Object.entries(o)
    .map(([key, value]) => `--${key} ${value}`)
    .join(' ')

const getTypesVersions = async () => {
  const result: Record<string, unknown> = {}
  const exclude: string[] = []
  const folders = await fs.readdir(OUTPUT_ESM_DIR, {withFileTypes: true})
  const directoriesInDIrectory = folders
    .filter((item) => item.isDirectory())
    .map((item) => item.name)
  directoriesInDIrectory.forEach((item) => {
    if (!exclude.includes(item)) {
      result[item] = [`esm/${item}/index.d.ts`, `commonjs/${item}/index.d.ts`]
    }
  })
  return result
}

//=================================== CLEAN ===================================
const cleanDist: ListrTask = {
  title: 'Removing existing dist/ directory to ensure a clean build',
  skip: () => !premiseOf(fs.stat(OUTPUT_DIR)),
  task: () => runInShell(`rimraf ${OUTPUT_DIR}`),
}

//=================================== BUILDING FILE FOR COMMONJS ===================================
const swcBuildCommonJS: ListrTask = {
  title: 'Building CommonJS output with SWC',
  task: async () => {
    const buildScript = `swc ${INPUT_DIR} -d ${OUTPUT_COMMONJS_DIR}`
    return runInShell(`${buildScript} -C module.type=commonjs`)
  },
}

const dtsBuildCommonJS: ListrTask = {
  title: 'Building typescript declaration files for CommonJS',
  task: async () => {
    const buildScript = `tsc -p tsconfig.build.json`
    const options = {
      declaration: true,
      declarationDir: OUTPUT_COMMONJS_DIR,
      emitDeclarationOnly: true,
    }

    return runInShell(`${buildScript} ${makeCliOptions(options)}`)
  },
}

//=================================== BUILDING FILE FOR ESM ===================================
const swcBuildESM: ListrTask = {
  title: 'Building CommonJS output with SWC',
  task: async () => {
    const buildScript = `swc ${INPUT_DIR} -d ${OUTPUT_ESM_DIR}`
    return runInShell(`${buildScript} -C module.type=es6`)
  },
}

const dtsBuildESM: ListrTask = {
  title: 'Building typescript declaration files for ESM',
  task: async () => {
    const buildScript = `tsc -p tsconfig.build.json`
    const options = {
      declaration: true,
      declarationDir: OUTPUT_ESM_DIR,
      emitDeclarationOnly: true,
    }

    return runInShell(`${buildScript} ${makeCliOptions(options)}`)
  },
}

//=================================== RUNNER ===================================
const tasks = new Listr([
  cleanDist,
  {
    title: 'Build the package with CommonJS',
    task: () => {
      const subtasks = new Listr([swcBuildCommonJS, dtsBuildCommonJS], {
        concurrent: true,
      })
      return subtasks
    },
  },
  {
    title: 'Build the package with ESM',
    task: () => {
      const subtasks = new Listr([swcBuildESM, dtsBuildESM], {concurrent: true})
      return subtasks
    },
  },
  {
    title: 'Generate package.json',
    task: async () => {
      const packageJson = await fs
        .readFile('package.json', 'utf-8')
        .then(JSON.parse)

      packageJson.scripts = {}
      packageJson.devDependencies = {}
      packageJson.type = 'module'
      packageJson.main = './commonjs/index.js'
      packageJson.types = './commonjs/index.d.ts'
      packageJson.module = './esm/index.js'
      packageJson.exports = {
        '.': {
          import: './esm/index.js',
          required: './commonjs/index.js',
          default: './esm/index.js',
        },
        './*': {
          import: './esm/*/index.js',
          required: './commonjs/*/index.js',
          default: './esm/*/index.js',
        },
      }
      const typesVersions = await getTypesVersions()
      packageJson.typesVersions = {
        '*': {
          ...typesVersions,
        },
      }

      if (packageJson.publishConfig) delete packageJson.publishConfig
      if (packageJson.files) delete packageJson.files

      // Generate package.json inside commonjs to interpret file to commonjs
      fs.writeFile(
        `${OUTPUT_COMMONJS_DIR}/package.json`,
        JSON.stringify(
          {
            type: 'commonjs',
          },
          null,
          2,
        ),
      )

      return fs.writeFile(
        `${OUTPUT_DIR}/package.json`,
        JSON.stringify(packageJson, null, 2),
      )
    },
  },
])

// Run 'em
tasks.run().catch((e) => console.error(e))
