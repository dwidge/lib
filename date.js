export const addSeconds = (dt, s) =>
	dt.setSeconds(dt.getSeconds() + s)

export const printTime = t => {
	const at = Math.abs(t)
	if (at < 1000) return t + 'ms'
	if (at < 60 * 1000) return (t / 1000 | 0) + 's'
	if (at < 60 * 60 * 1000) return (t / 1000 / 60 | 0) + 'm'
	if (at < 24 * 60 * 60 * 1000) return (t / 1000 / 60 / 60 | 0) + 'h'
	return (t / 1000 / 60 / 60 / 24 | 0) + 'd'
}
