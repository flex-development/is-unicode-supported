/**
 * @file Internal - process
 * @module is-unicode-supported/internal/process/browser
 */

import type Process from '#interfaces/process'

/**
 * Information about the current Node.js process.
 *
 * @type {Process}
 */
export default { browser: true, env: {} } as Process
