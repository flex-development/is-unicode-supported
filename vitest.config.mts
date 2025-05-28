/**
 * @file Configuration - Vitest
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import Notifier from '#tests/reporters/notifier'
import VerboseReporter from '#tests/reporters/verbose'
import pathe from '@flex-development/pathe'
import ci from 'is-ci'
import {
  defineConfig,
  type ConfigEnv,
  type ViteUserConfig
} from 'vitest/config'

export default defineConfig(config)

/**
 * Create a vitest configuration.
 *
 * @see {@linkcode ConfigEnv}
 * @see {@linkcode ViteUserConfig}
 *
 * @this {void}
 *
 * @param {ConfigEnv} env
 *  Configuration environment
 * @return {ViteUserConfig}
 *  Root vitest configuration object
 */
function config(this: void, env: ConfigEnv): ViteUserConfig {
  /**
   * Whether typechecking is enabled.
   *
   * @const {boolean} typecheck
   */
  const typecheck: boolean = env.mode === 'typecheck'

  return {
    test: {
      allowOnly: !ci,
      chaiConfig: {
        includeStack: true,
        showDiff: true,
        truncateThreshold: 0
      },
      clearMocks: true,
      coverage: {
        all: true,
        clean: true,
        cleanOnRerun: true,
        exclude: [
          '**/*.d.mts',
          '**/__mocks__/',
          '**/__tests__/',
          '**/interfaces/',
          '**/types/',
          '**/index.mts',
          '!src/index.mts'
        ],
        extension: ['.mts'],
        include: ['src'],
        provider: 'v8',
        reportOnFailure: !ci,
        reporter: env.mode === 'reports'
          ? ['text']
          : [ci ? 'lcovonly' : 'html', 'json-summary', 'text'],
        reportsDirectory: './coverage',
        skipFull: false,
        thresholds: { 100: true, perFile: true }
      },
      globalSetup: [],
      globals: true,
      include: ['src/**/__tests__/*.spec.mts'],
      mockReset: true,
      name: typecheck ? 'types' : undefined as never,
      outputFile: {
        blob: `.vitest-reports/${env.mode}.blob.json`,
        json: pathe.join('__tests__/reports', env.mode + '.json')
      },
      passWithNoTests: true,
      reporters: JSON.parse(process.env['VITEST_UI'] ?? '0')
        ? [new Notifier(), new VerboseReporter()]
        : env.mode === 'reports'
        ? [new VerboseReporter()]
        : [
          ci ? 'github-actions' : new Notifier(),
          'blob',
          'json',
          new VerboseReporter()
        ],
      /**
       * Store snapshots next to the directory of `file`.
       *
       * @param {string} file
       *  Path to test file
       * @param {string} extension
       *  Snapshot extension
       * @return {string}
       *  Custom snapshot path
       */
      resolveSnapshotPath(file: string, extension: string): string {
        return pathe.resolve(
          pathe.resolve(pathe.dirname(pathe.dirname(file)), '__snapshots__'),
          pathe.basename(file).replace(/\.spec.mts/, '') + extension
        )
      },
      restoreMocks: true,
      setupFiles: [],
      snapshotFormat: {
        callToJSON: true,
        min: false,
        printBasicPrototype: false,
        printFunctionName: true
      },
      snapshotSerializers: [],
      typecheck: {
        allowJs: false,
        checker: 'tsc',
        enabled: typecheck,
        ignoreSourceErrors: false,
        include: ['**/__tests__/*.spec-d.mts'],
        only: true,
        tsconfig: './tsconfig.typecheck.json'
      },
      unstubEnvs: true,
      unstubGlobals: true,
      workspace: typecheck ? undefined as never : [
        {
          extends: true,
          resolve: {
            conditions: [
              'browser',
              'is-unicode-supported',
              'development'
            ]
          },
          test: {
            environment: 'happy-dom',
            environmentOptions: {},
            name: 'browser',
            setupFiles: [],
            typecheck: { enabled: false }
          }
        },
        {
          extends: true,
          ssr: {
            resolve: { conditions: ['is-unicode-supported', 'development'] }
          },
          test: {
            environment: 'node',
            environmentOptions: {},
            name: 'node',
            typecheck: { enabled: false }
          }
        }
      ]
    }
  }
}
