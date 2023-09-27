import path from 'path'
import { BranchConfig, Package } from './types'

// TODO: List your npm packages here. The first package will be used as the versioner.
export const packages: Package[] = [
  {
    name: '@tanstack-rtl/table-core',
    packageDir: 'table-core',
    srcDir: 'src',
  },
  {
    name: '@tanstack-rtl/react-table',
    packageDir: 'react-table',
    srcDir: 'src',
    dependencies: ['@tanstack-rtl/table-core'],
  },
  {
    name: '@tanstack-rtl/solid-table',
    packageDir: 'solid-table',
    srcDir: 'src',
    dependencies: ['@tanstack-rtl/table-core'],
  },
  {
    name: '@tanstack-rtl/vue-table',
    packageDir: 'vue-table',
    srcDir: 'src',
    dependencies: ['@tanstack-rtl/table-core'],
  },
  {
    name: '@tanstack-rtl/svelte-table',
    packageDir: 'svelte-table',
    srcDir: 'src',
    dependencies: ['@tanstack-rtl/table-core'],
  },
  {
    name: '@tanstack-rtl/react-table-devtools',
    packageDir: 'react-table-devtools',
    srcDir: 'src',
    peerDependencies: ['@tanstack-rtl/react-table'],
  },
  {
    name: '@tanstack-rtl/match-sorter-utils',
    packageDir: 'match-sorter-utils',
    srcDir: 'src',
  },
]

export const latestBranch = 'main'

export const branchConfigs: Record<string, BranchConfig> = {
  main: {
    prerelease: false,
    ghRelease: true,
  },
  next: {
    prerelease: true,
    ghRelease: true,
  },
  beta: {
    prerelease: true,
    ghRelease: true,
  },
  alpha: {
    prerelease: true,
    ghRelease: true,
  },
}

export const rootDir = path.resolve(__dirname, '..')
export const examplesDirs = [
  'examples/react',
  'examples/solid',
  'examples/svelte',
  'examples/vue',
]
