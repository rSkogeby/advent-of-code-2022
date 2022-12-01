import { readFileSync } from 'fs'

export default function readFile (path: string): string {
  return readFileSync(path, 'utf8')
}
