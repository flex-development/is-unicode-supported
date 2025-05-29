/**
 * @file Internal - supported
 * @module is-unicode-supported/internal/supported
 */

import type Process from '#interfaces/process'

/**
 * Check for Unicode support.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Partial<Process> | null | undefined} process
 *  Info about the current Node.js process
 * @param {Document | null | undefined} document
 *  Browser document
 * @return {boolean}
 *  `true` if unicode is supported, `false` otherwise
 */
function supported(
  this: void,
  process: Partial<Process> | null | undefined,
  document: Document | null | undefined
): boolean {
  if (process && !process.browser) {
    const { env = {}, platform } = process

    if (platform === 'win32') {
      return Boolean(env.WT_SESSION) || // windows terminal
        Boolean(env.TERMINUS_SUBLIME) || // terminus (<0.2.27)
        env.ConEmuTask === '{cmd::Cmder}' || // conemu and cmder
        env.TERM_PROGRAM === 'Terminus-Sublime' ||
        env.TERM_PROGRAM === 'vscode' ||
        env.TERM === 'alacritty' ||
        env.TERM === 'rxvt-unicode' ||
        env.TERM === 'rxvt-unicode-256color' ||
        env.TERM === 'xterm-256color' ||
        env.TERMINAL_EMULATOR === 'JetBrains-JediTerm'
    }

    return env.TERM !== 'linux' // linux console (kernel)
  }

  if (document) {
    /**
     * HTML span element.
     *
     * @const {HTMLSpanElement} span
     */
    const span: HTMLSpanElement = document.createElement('span')

    // check render.
    return span.textContent = '✓', span.textContent.length === 1
  }

  return false
}

export default supported
