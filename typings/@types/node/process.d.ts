declare namespace NodeJS {
  /**
   * User environment.
   *
   * @extends {Dict<string>}
   */
  interface ProcessEnv extends Dict<string> {
    /**
     * The type of terminal being used.
     */
    TERM?: string | undefined
  }
}
