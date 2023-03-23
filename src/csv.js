import { transpose } from './array.js'

export const calcCsvFromObjects=(objects,del=',',arraydel=';')=>{
return objects.length?[Object.keys(objects[0]).join(del)].concat(
objects.map(o=>Object.values(o).map(csvFromObject(arraydel)).join(del))
).join('\n'):''
}

const csvFromObject=(arraydel)=>(a)=>{
if(arraydel && a instanceof Array) return a.map(csvFromObject()).join(arraydel)
if(typeof a === "object") return JSON.stringify(a)
return a
}

export const calcObjectsFromCsv=(csv,del=',',arraydel=';')=>{
const lines=csv.split('\n').map(l=>l.split(del))
const keys=lines[0]
const numstr=v=>isNaN(+v)?v:+v
const arrstr=v=>v.includes(arraydel)?v.split(arraydel).map(numstr):parseJson(v)??numstr(v)
return lines.slice(1).map(l=>Object.fromEntries(transpose([keys,l.map(arrstr)])))
}

const parseJson=s=>{
try{return JSON.parse(s)}
catch(e){return}
}

export const mapObject=(from,to=from,transform=[])=>{
const passthru=v=>v

const map=o=>
from.map((name,i)=>(transform[i]||passthru)(o[name]))

return o=>Object.fromEntries(transpose([to,map(o)]))
}
