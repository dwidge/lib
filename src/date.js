import { format } from 'date-fns'

export const addSeconds = (dt, s) =>
	dt.setSeconds(dt.getSeconds() + s)

export const printSecondsRounded = t => {
	const at = Math.abs(t)
	if (at < 60) return (t | 0) + 's'
	if (at < 60 * 60) return (t / 60 | 0) + 'm'
	if (at < 24 * 60 * 60) return (t / 60 / 60 | 0) + 'h'
	return (t / 60 / 60 / 24 | 0) + 'd'
}

export const today = () =>
	format(new Date(), 'yyyy/MM/dd')

export const dateYYMMDDfromSeconds = sec =>
	new Date(sec * 1000).toLocaleDateString('en-ZA').split('/').join('-')

export const dateSecondsFromYYMMDD = str => {
	const segs = str.split('-')
	const date = new Date(+segs[0], (+segs[1]) - 1, +segs[2])
	return date.getTime() / 1000 | 0
}
