import { transpose } from './array.js'

export const calcCsvFromObjects = (objects, del = ',') =>
	[Object.keys(objects[0]).join(del)].concat(
		objects.map(o => Object.values(o).join(del)),
	).join('\n')

export const calcObjectsFromCsv = (csv, del = ',') => {
	const lines = csv.split('\n').map(l => l.split(del))
	const keys = lines[0]
	const numstr = v => isNaN(+v) ? v : +v
	return lines.slice(1).map(l => Object.fromEntries(transpose([keys, l.map(numstr)])))
}

export const mapObject = (from, to = from, transform = []) => {
	const passthru = v => v

	const map = o =>
		from.map((name, i) => (transform[i] || passthru)(o[name]))

	return o => Object.fromEntries(transpose([to, map(o)]))
}
