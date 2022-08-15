import { calcCsvFromObjects, calcObjectsFromCsv, mapObject } from '../csv.js'

const obj = [
	{ a: 11, b: [121, 122] },
	{ a: 21, b: [221, 222] },
]
const objc = [
	{ c: '11' },
	{ c: '21' },
]
const csv = `
a,b
11,121;122
21,221;222
`.trim()

it('calcCsvFromObjects', async () => {
	expect(calcCsvFromObjects(obj)).toEqual(csv)
	expect(calcCsvFromObjects([])).toEqual('')
})
it('calcObjectsFromCsv', async () => {
	expect(calcObjectsFromCsv(csv)).toEqual(obj)
	expect(calcObjectsFromCsv('')).toEqual([])
})
it('mapObject', async () => {
	expect(obj.map(mapObject(['a'], ['c'], [v => '' + v]))).toEqual(objc)
})
