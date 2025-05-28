/**
 * @file E2E Tests - api
 * @module is-unicode-supported/tests/e2e/api
 */

import * as testSubject from '@flex-development/is-unicode-supported'
import { alphabetize, identity } from '@flex-development/tutils'

describe('e2e:is-unicode-supported', () => {
  it('should expose public api', () => {
    expect(alphabetize(Object.keys(testSubject), identity)).toMatchSnapshot()
  })
})
