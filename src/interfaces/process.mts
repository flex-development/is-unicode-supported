/**
 * @file Interfaces - Process
 * @module is-unicode-supported/interfaces/Process
 */

/**
 * Object containing information about the current Node.js process.
 *
 * @internal
 */
interface Process {
  /**
   * Browser environment?
   */
  browser?: boolean | null | undefined

  /**
   * Object containing the user environment.
   *
   * > 👉 **Note**: On Windows operating systems, environment variables are
   * > case-insensitive.
   *
   * @see http://man7.org/linux/man-pages/man7/environ.7.html
   */
  env: NodeJS.ProcessEnv

  /**
   * String identifying the operating system platform for which the Node.js
   * binary was compiled.
   *
   * @see {@linkcode NodeJS.Platform}
   *
   * @readonly
   */
  readonly platform?: NodeJS.Platform | null | undefined
}

export type { Process as default }
