declare namespace NodeJS {
  /**
   * User environment.
   *
   * @extends {Dict<string>}
   */
  interface ProcessEnv extends Dict<string> {
    /**
     * Set by [ConEmu][] when it launches a shell or command, and it indicates
     * which ConEmu "task" was used to start the terminal session.
     *
     * [conemu]: https://conemu.github.io
     */
    ConEmuTask?: string | undefined

    /**
     * The type of terminal emulator being used.
     */
    TERM?: string | undefined

    /**
     * The name of the terminal program being used.
     */
    TERM_PROGRAM?: string | undefined

    /**
     * The terminal emulator program being used.
     */
    TERMINAL_EMULATOR?: string | undefined

    /**
     * Whether the running shell or command is executing inside the Terminus
     * terminal emulator embedded in Sublime Text.
     */
    TERMINUS_SUBLIME?: string | undefined

    /**
     * Unique identifier (UUID) set by Windows Terminal for each terminal tab or
     * session.
     */
    WT_SESSION?: string | undefined
  }
}
