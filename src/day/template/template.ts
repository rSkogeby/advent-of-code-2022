import readFile from '../../util/readFile'

const DAY = __dirname.split('/').pop()

function solutionName(input: string): void {
  // Do something
}

export default function main(): void {
  const inputFile = readFile(`src/day/${DAY}/input.txt`)

  const result = solutionName(inputFile)

  console.log(result)
}
