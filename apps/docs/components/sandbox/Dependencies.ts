export default function SandboxDependencies(
  demo: {
    raw: string
    codeVariant: 'TS'
  },
  options?: any,
) {
  function addTypeDeps(deps: Record<string, string>): void {
    const packagesWithBundledTypes = ['']
    const packagesWithDTPackage = Object.keys(deps).filter(
      (name) => packagesWithBundledTypes.indexOf(name) === -1,
    )

    packagesWithDTPackage.forEach((name) => {
      let resolvedName = name

      deps[`@types/${resolvedName}`] = 'latest'
    })
  }

  function extractDependencies(raw: string) {
    function includePeerDependencies(
      deps: Record<string, string>,
      versions: Record<string, string>,
    ): Record<string, string> {
      let newDeps: Record<string, string> = {
        ...deps,
        'react-dom': versions['react-dom'],
        react: versions.react,
      }

      // TODO: consider if this configuration could be injected in a "cleaner" way.
      if ((window as any).muiDocConfig) {
        newDeps = (window as any).muiDocConfig.csbIncludePeerDependencies(
          newDeps,
          {versions},
        )
      }

      return newDeps
    }
    let deps: Record<string, string> = {}
    let versions: Record<string, string> = {
      react: 'latest',
      'react-dom': 'latest',
    }

    const re = /^import\s'([^']+)'|import\s[\s\S]*?\sfrom\s+'([^']+)/gm
    let m: RegExpExecArray | null = null
    // eslint-disable-next-line no-cond-assign
    while ((m = re.exec(raw))) {
      const fullName = m[2] ?? m[1]
      // handle scope names
      const name =
        fullName.charAt(0) === '@'
          ? fullName.split('/', 2).join('/')
          : fullName.split('/', 1)[0]

      if (!deps[name] && !name.startsWith('.')) {
        deps[name] = versions[name] ? versions[name] : 'latest'
      }
    }

    deps = includePeerDependencies(deps, versions)

    return deps
  }

  const dependencies = extractDependencies(demo.raw)

  addTypeDeps(dependencies)
  dependencies.typescript = 'latest'

  const devDependencies = {
    'react-scripts': 'latest',
  }

  return {dependencies, devDependencies}
}
