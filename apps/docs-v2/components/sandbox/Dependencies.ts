type RegExpMatchArrayWithGroupsOnly<T> = {
  groups?: {
    [key in keyof T]: string
  }
}
type RegExpMatchArrayWithGroups<T> =
  | (RegExpMatchArray & RegExpMatchArrayWithGroupsOnly<T>)
  | null

export default function SandboxDependencies(
  demo: {
    raw: string
    codeVariant: 'JS' | 'TS'
  },
  options?: any,
) {
  function addTypeDeps(deps: Record<string, string>): void {
    const packagesWithBundledTypes = ['date-fns', 'dayjs']
    const packagesWithDTPackage = Object.keys(deps)
      .filter((name) => packagesWithBundledTypes.indexOf(name) === -1)
      // All the MUI packages come with bundled types
      .filter((name) => name.indexOf('@mui/') !== 0)

    packagesWithDTPackage.forEach((name) => {
      let resolvedName = name
      // scoped package?
      if (name.startsWith('@')) {
        // https://github.com/DefinitelyTyped/DefinitelyTyped#what-about-scoped-packages
        resolvedName = name.slice(1).replace('/', '__')
      }

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

    // TODO: consider if this configuration could be injected in a "cleaner" way.
    if ((window as any).muiDocConfig) {
      const muiCommitRef = process.env.PULL_REQUEST_ID
        ? process.env.COMMIT_REF
        : undefined
      versions = (window as any).muiDocConfig.csbGetVersions(versions, {
        muiCommitRef,
      })
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

      const dateAdapterMatch = fullName.match(
        /^@mui\/(lab|x-date-pickers)\/(?<adapterName>Adapter.*)/,
      ) as RegExpMatchArrayWithGroups<{adapterName: string}>
      if (dateAdapterMatch !== null) {
        const packageName = (
          {
            AdapterDateFns: 'date-fns',
            AdapterDateFnsJalali: 'date-fns-jalali',
            AdapterDayjs: 'dayjs',
            AdapterLuxon: 'luxon',
            AdapterMoment: 'moment',
            AdapterMomentHijri: 'moment-hijri',
            AdapterMomentJalaali: 'moment-jalaali',
          } as Record<string, string>
        )[dateAdapterMatch.groups?.adapterName || '']
        if (packageName === undefined) {
          throw new TypeError(
            `Can't determine required npm package for adapter '${dateAdapterMatch[1]}'`,
          )
        }
        deps[packageName] = 'latest'
      }
    }

    deps = includePeerDependencies(deps, versions)

    return deps
  }

  const dependencies = extractDependencies(demo.raw)

  if (demo.codeVariant === 'TS') {
    addTypeDeps(dependencies)
    dependencies.typescript = 'latest'
  }

  const devDependencies = {
    'react-scripts': 'latest',
  }

  return {dependencies, devDependencies}
}
