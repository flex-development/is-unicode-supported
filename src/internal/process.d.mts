import type Process from '#interfaces/process'

declare module '#internal/process' {
  const process: Process
  export default process
}
