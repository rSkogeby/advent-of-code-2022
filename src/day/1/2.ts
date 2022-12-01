import readFile from '../../util/readFile'

const DAY = __dirname.split('/').pop()

function sumTopThreeCalories(calories: string): number {
  const caloriesPerElf = calories.split('\n\n').map(caloriesPerElf => caloriesPerElf.split('\n').map(Number).reduce((a, b) => a + b, 0))

  return caloriesPerElf.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b, 0)
}

export default function main(): void {
  const inputFile = readFile(`src/day/${DAY}/input.txt`)

  const result = sumTopThreeCalories(inputFile)

  console.log(result)
}
