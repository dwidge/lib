export const paragraphsOfString = (h) => {
  const ps = [];

  const reg = /<p(|\s+[^>]*)>(.*?)<\/p\s*>/g;
  let result;

  while (ps.length < 99 && (result = reg.exec(h)) !== null) {
    const p = result[2];
    ps.push(p);
  }

  return ps;
};

const stripWhitespace = (s) => s.replace(/\s+/g, " ");
const stripAnchors = (s) => s.replace(/<a(|\s+[^>]*)>(.*?)<\/a\s*>/g, "");
const stripSpans = (s) =>
  s.replace(/<(i|b|span)(|\s+[^>]*)>(.*?)<\/(i|b|span)\s*>/g, "$3");
const stripDigits = (s) => s.replace(/[0-9]+/g, "");
const stripHtml = (s) => s.replace(/<[^>]*>/g, "");

const punc = '.,!?"'.split("");
const replace = (abs) => (s) =>
  abs.reduce((t, [a, b]) => t.split(a).join(b), s);
const padchars = (chars) => replace(chars.map((c) => [c, " " + c + " "]));

export const wordsOfString = (h) => {
  h = h.toLowerCase();
  h = stripWhitespace(h);
  h = stripAnchors(h);
  h = stripSpans(h);
  h = stripDigits(h);
  h = stripHtml(h);
  h = h.replace(/[^a-zA-Z- ]/g, "");
  h = padchars(punc)(h)
    .split(" ")
    .map((w) => w.trim())
    .filter((v) => v);
  return h;
};
