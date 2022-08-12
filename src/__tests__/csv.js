import { calcCsvFromObjects, calcObjectsFromCsv, mapObject } from '../csv.js'

const obj = [
	{ a: 11, b: 12 },
	{ a: 21, b: 22 },
]
const objc = [
	{ c: '12' },
	{ c: '22' },
]
const csv = `
a,b
11,12
21,22
`.trim()

it('calcCsvFromObjects', async () => {
	expect(calcCsvFromObjects(obj)).toEqual(csv)
})
it('calcObjectsFromCsv', async () => {
	expect(calcObjectsFromCsv(csv)).toEqual(obj)
})
it('mapObject', async () => {
	expect(obj.map(mapObject(['b'], ['c'], [v => '' + v]))).toEqual(objc)
})
