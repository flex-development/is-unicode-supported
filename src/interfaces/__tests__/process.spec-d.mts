/**
 * @file Type Tests - Process
 * @module is-unicode-supported/interfaces/tests/unit-d/Process
 */

import type TestSubject from '#interfaces/process'
import type {
  Nilable,
  OptionalKeys,
  ReadonlyKeys
} from '@flex-development/tutils'

describe('unit-d:interfaces/Process', () => {
  it('should match [browser?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('browser')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [env: NodeJS.ProcessEnv]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('env')
      .toEqualTypeOf<NodeJS.ProcessEnv>()
  })

  it('should match [readonly platform?: NodeJS.Platform | null | undefined]', () => {
    // Arrange
    type OK = OptionalKeys<TestSubject>
    type RK = ReadonlyKeys<TestSubject>
    type T = NodeJS.Platform | null | undefined

    // Expect
    expectTypeOf<OK>().extract<'platform'>().not.toBeNever()
    expectTypeOf<RK>().extract<'platform'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('platform').toEqualTypeOf<T>()
  })
})
