export const addSeconds = (dt, s) =>
	dt.setSeconds(dt.getSeconds() + s)

export const printSecondsRounded = t => {
	const at = Math.abs(t)
	if (at < 60) return (t | 0) + 's'
	if (at < 60 * 60) return (t / 60 | 0) + 'm'
	if (at < 24 * 60 * 60) return (t / 60 / 60 | 0) + 'h'
	return (t / 60 / 60 / 24 | 0) + 'd'
}
