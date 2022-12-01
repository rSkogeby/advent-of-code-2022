import readFile from '../../util/readFile'

const DAY = __dirname.split('/').pop()

function findMaxCaloriesPerElf(calories: string): number {
  const caloriesPerElf = calories.split('\n\n').map(caloriesPerElf => caloriesPerElf.split('\n').map(Number).reduce((a, b) => a + b, 0))

  return Math.max(...caloriesPerElf)
}

export default function main(): void {
  const inputFile = readFile(`src/day/${DAY}/input.txt`)

  const result = findMaxCaloriesPerElf(inputFile)

  console.log(result)
}
