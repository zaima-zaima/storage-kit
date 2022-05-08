const types = {
  "[object Array]": "array",
  "[object Number]": "number",
  "[object Boolean]": "boolean",
  "[object String]": "string",
  "[object Null]": "null",
  "[object Object]": "object",
};

export default function (tar) {
  const type = Object.prototype.toString.call(tar);
  return types[type];
}
