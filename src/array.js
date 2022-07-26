// gist.github.com/femto113/1784503?permalink_comment_id=1701169#gistcomment-1701169
export const transpose = a => a[0].map((_, c) => a.map(r => r[c]))

export const last = arr => arr[arr.length - 1]

export const getItemById = (list, id) => list.find(o => o.id === id)

export const replaceItemById = (list, item) => list.map(o => o.id === item.id ? item : o)

export const dropItemById = (list, id) => list.filter(o => o.id !== id)

export const dropIfIncluded = (as, bs, isEq) => as.filter(a => !bs.find(b => isEq(a, b)))

export const onlyHan = chars =>
	chars.filter(char => /\p{Script=Han}/u.test(char))

export const unique = array =>
	[...new Set(array)]

export const range = (beg, end) =>
	Array(end - beg).map((_, i) => i + beg)
