/**
 * @file Integration Tests - isUnicodeSupported
 * @module is-unicode-supported/tests/integration/isUnicodeSupported
 */

import document from '#internal/document'
import process from '#internal/process'
import supported from '#internal/supported'
import testSubject from '#is-unicode-supported'

vi.mock(import('#internal/supported'), async og => ({
  default: vi.fn((await og<{ default: typeof supported }>()).default)
}))

describe('integration:isUnicodeSupported', () => {
  it('should detect if unicode is supported', () => {
    // Act
    const result = testSubject()

    // Expect
    expect(result).to.be.true
    expect(supported).toHaveBeenCalledExactlyOnceWith(process, document)
  })
})
