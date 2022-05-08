**this tool will help you to operate your localStorage simply**

### usage

install

```
npm i storage-kit
```

import

```js
import StorageKit from "storage-kit";
```

before you start, you should to create a instance like:

```js
const st = new StorageKit();
```

this instance provide some functions for you

### functions

#### add

this function could add an/some item(s);

```
st.add(storageObject);
```

storageObject:

- type: `object` or `array`
  object: you can add one item in one time, it should be : {key:value}</br>
  array: you can add some items in currently, it should be : [ {key:value} , {key,value} ]

Example:

```js
st.add({ mode: "0" }); // when storageObject is an Object
```

```js
st.add([{ one: "1" }, { two: "2" }, { three: "3" }]); /// when storageObject is an array
```

sometimes you may want to save a data as object or array:

```js
st.add({
  user: {
    name: "zaima",
    age: 23,
    pants: "unknow",
    love: "girls who wears short skrit and silk socks",
  },
});
```

you can write this directly, you needn't convert it from Object to string, tool will help you convert it from Object to string as json automatically

#### get

this function could get you what you want

```
st.get(key);
```

Example:

```js
st.get("two"); // 2
```

Did you remenber that we had add a data of string as json just now? now you can get it directly. also tools can convert it automatically

```js
const user = st.get("user");
consle.log(typeof user); // Object
```

#### clear

To clear all of items or clear it by the key

```
str.clear(key?)
```

if key is undefined, it will delete all of items

Example:

```js
st.clear("one"); // the item with key was one has been deleted
```

```js
st.clear(); // all done
```

**tip:**
if you want to update items, you can use add to update it

Example:

```js
st.get("two"); // now the value is 2
st.add({ two: 9 }); // now the value is 9
```
