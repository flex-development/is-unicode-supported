/**
 * @file Unit Tests - supported
 * @module is-unicode-supported/internal/tests/unit/supported
 */

import type Process from '#interfaces/process'
import document from '#internal/document'
import testSubject from '#internal/supported'

describe('unit:internal/supported', () => {
  describe('browser', () => {
    it.each<Parameters<typeof testSubject>>([
      [null, null],
      [undefined, undefined],
      [
        { browser: true },
        Object.assign({}, document, {
          createElement(): HTMLElement {
            return Object.defineProperties({} as HTMLElement, {
              textContent: {
                /**
                 * Get the text content of the HTML element and its descendants.
                 *
                 * @return {string}
                 *  Text content
                 */
                get(): string {
                  return ''
                },

                /**
                 * Set the text content of the HTML element.
                 *
                 * @param {string | null} content
                 *  Text content
                 * @return {undefined}
                 */
                set(content: string | null): undefined {
                  return void content
                }
              }
            })
          }
        })
      ]
    ])('should return `false` if browser fails render test (%#)', (
      process,
      document
    ) => {
      expect(testSubject(process, document)).to.be.false
    })
  })

  describe('node', () => {
    it.each<[Parameters<typeof testSubject>[0]]>([
      [null],
      [undefined],
      [{ env: { TERM: 'linux' } }],
      [{ env: { TERM: 'dumb' }, platform: 'win32' }]
    ])('should return `false` if unicode is not supported (%#)', process => {
      expect(testSubject(process, undefined)).to.be.false
    })

    it.each<[Partial<Process>]>([
      [{ env: { TERM: 'dumb' } }],
      [{ env: { ConEmuTask: '{cmd::Cmder}' }, platform: 'win32' }],
      [{ env: { TERM: 'alacritty' }, platform: 'win32' }],
      [{ env: { TERM: 'rxvt-unicode' }, platform: 'win32' }],
      [{ env: { TERM: 'rxvt-unicode-256color' }, platform: 'win32' }],
      [{ env: { TERM: 'xterm-256color' }, platform: 'win32' }],
      [{ env: { TERM_PROGRAM: 'Terminus-Sublime' }, platform: 'win32' }],
      [{ env: { TERM_PROGRAM: 'vscode' }, platform: 'win32' }],
      [{ env: { TERMINUS_SUBLIME: '1' }, platform: 'win32' }],
      [{ env: { WT_SESSION: 'true' }, platform: 'win32' }]
    ])('should return `true` if unicode is supported (%#)', process => {
      expect(testSubject(process, undefined)).to.be.true
    })
  })
})
