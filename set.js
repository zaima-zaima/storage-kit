import types from "./type";

/**
 *
 * @param {Object｜array} localStroge
 * 如果该参数为一个对象，则表示添加一条记录，格式应该为{key:value}
 * 如果该参数为一个数组，则表示添加一组记录，格式应该为[{key:value},{...}]
 * @description 该函数适用于设置localStorage
 */

function jsonToStringify(object) {
  return JSON.stringify(object);
}

export default function (strogeData) {
  if (types(strogeData) === "array") {
    strogeData.forEach((ob) => {
      const propertyNames = Object.getOwnPropertyNames(ob);
      if (
        types(propertyNames[0]) === "object" ||
        types(propertyNames[0]) === "array"
      ) {
        ob[propertyNames[0]] = jsonToStringify(ob[propertyNames[0]]);
      }
      localStorage.setItem(propertyNames[0], ob[propertyNames[0]]);
    });
    return;
  } else if (types(strogeData) === "object") {
    const propertyNames = Object.getOwnPropertyNames(strogeData);
    if (
      types(strogeData[propertyNames[0]]) === "object" ||
      types(strogeData[propertyNames[0]]) === "array"
    ) {
      strogeData[propertyNames[0]] = jsonToStringify(
        strogeData[propertyNames[0]]
      );
    }
    localStorage.setItem(propertyNames[0], strogeData[propertyNames[0]]);
    return;
  }
  throw Error("unExpected param: strogeData");
}
