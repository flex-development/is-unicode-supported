/**
 * @file isUnicodeSupported
 * @module is-unicode-supported/isUnicodeSupported
 */

import document from '#internal/document'
import process from '#internal/process'
import supported from '#internal/supported'

/**
 * Check if [Unicode][] is supported.
 *
 * This can be useful to decide whether to use Unicode characters or fallback
 * ASCII characters.
 *
 * > 👉 **Note**: The function assumes all non-Windows terminals support Unicode
 * > and browsers that can correctly render `'✓'` (`U+2713`) also support
 * > unicode. Windows terminals with unicode support are checked against a
 * > hardcoded list.
 *
 * [unicode]: https://home.unicode.org
 *
 * @this {void}
 *
 * @return {boolean}
 *  `true` if unicode is supported, `false` otherwise
 */
function isUnicodeSupported(this: void): boolean {
  return supported(process, document)
}

export default isUnicodeSupported
